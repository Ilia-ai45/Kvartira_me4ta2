// File path: /api/sendMessage.ts
import { google } from 'googleapis';

const formatCurrency = (value: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);

// Helper function to create the Google Sheets client
const getSheetsClient = () => {
    const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        console.error("CRITICAL: Google Service Account credentials are not set in environment variables.");
        throw new Error("Ошибка конфигурации сервера: не найдены учетные данные Google.");
    }

    // Vercel replaces newlines in env vars with \\n. We need to convert them back.
    const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
};


export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID,
        GOOGLE_SHEET_ID
    } = process.env;

    const formData = request.body;

    if (!formData.name || !formData.phone) {
        return response.status(400).json({ message: 'Имя и телефон обязательны.' });
    }

    // --- Task 1: Send to Google Sheets ---
    const sendToGoogleSheets = async () => {
        if (!GOOGLE_SHEET_ID) {
            console.warn("Google Sheet ID is not configured. Skipping.");
            return { status: 'skipped', service: 'Google Sheets' };
        }
        try {
            const sheets = getSheetsClient();
            
            const timestamp = new Date();
            const source = formData.showExtended ? 'Калькулятор' : 'Простая форма';
            let details = '';
            if (formData.showExtended && formData.calculatorData) {
              const { calculatorData } = formData;
              details = 
                `Стоимость: ${formatCurrency(calculatorData.propertyPrice)} | ` +
                `Взнос: ${formatCurrency(calculatorData.downPayment)} | ` +
                `Платеж: ${formatCurrency(calculatorData.monthlyPayment)} | ` +
                `Ставка: ${calculatorData.interestRate}% | ` +
                `Скидка: ${calculatorData.quickDealDiscount ? 'Да' : 'Нет'}`;
            }

            const rowData = [
                timestamp.toLocaleString('ru-RU', { timeZone: 'Asia/Yekaterinburg' }), // Use a specific timezone
                formData.name || '',
                formData.phone || '',
                formData.rooms || 'Не указано',
                formData.priority || 'Не указано',
                source,
                details
            ];

            await sheets.spreadsheets.values.append({
                spreadsheetId: GOOGLE_SHEET_ID,
                range: 'Лист1!A1', // Assumes data is on a sheet named 'Лист1'
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: [rowData],
                },
            });

            return { status: 'success', service: 'Google Sheets' };
        } catch (error) {
            console.error("--- ERROR SENDING TO GOOGLE SHEETS ---");
            console.error("Timestamp:", new Date().toISOString());
            console.error("Error Message:", error.message);
            // Log the detailed error object which often contains more info
            console.error("Full Error Object:", JSON.stringify(error, null, 2));
            
            const userFriendlyMessage = `Ошибка Google Sheets: ${error.message}. Проверьте права доступа и имя листа.`;
            return { status: 'failed', service: 'Google Sheets', error: userFriendlyMessage };
        }
    };

    // --- Task 2: Send to Telegram ---
    const sendToTelegram = async () => {
         if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.warn("Telegram environment variables are not set. Skipping.");
            return { status: 'skipped', service: 'Telegram' };
        }

        let message = `*Новая заявка с сайта!*\n\n*Имя:* ${formData.name}\n*Телефон:* \`${formData.phone}\``;

        if (formData.showExtended && formData.calculatorData) {
            const { calculatorData, rooms, priority } = formData;
            message += `\n\n*--- Заявка с калькулятора ---*\n`;
            message += `Стоимость: *${formatCurrency(calculatorData.propertyPrice)}*\n`;
            message += `Первый взнос: *${formatCurrency(calculatorData.downPayment)}*\n`;
            message += `Ежемесячный платеж: *${formatCurrency(calculatorData.monthlyPayment)}*\n`;
            message += `Ставка: *${calculatorData.interestRate}%*\n`;
            if (calculatorData.quickDealDiscount) {
                message += `*🔥 Активирована скидка за быструю сделку! (-100 000 руб)*\n`;
            }
            message += `\n*--- Пожелания клиента ---*\n`;
            message += `Кол-во комнат: *${rooms || 'Не указано'}*\n`;
            message += `Приоритет: *${priority || 'Не указано'}*\n`;
        }

        const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            const telegramResponse = await fetch(telegramApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
                signal: AbortSignal.timeout(10000)
            });

            if (!telegramResponse.ok) {
                 const errorData = await telegramResponse.json();
                 throw new Error(`Telegram API Error: ${errorData.description || 'Unknown error'}`);
            }
            return { status: 'success', service: 'Telegram' };
        } catch (error) {
            console.error("--- ERROR SENDING TO TELEGRAM ---");
            console.error("Timestamp:", new Date().toISOString());
            console.error("Error Message:", error.message);
            const userFriendlyMessage = `Ошибка Telegram: ${error.message}. Проверьте токен и ID чата.`;
            return { status: 'failed', service: 'Telegram', error: userFriendlyMessage };
        }
    };

    // --- Execute both tasks in parallel ---
    const results = await Promise.allSettled([
        sendToGoogleSheets(),
        sendToTelegram()
    ]);

    const fulfilledResults = results.filter(
        (r): r is PromiseFulfilledResult<{ status: string; service: string; error?: any; }> => r.status === 'fulfilled'
    ).map(r => r.value);
    
    const successfulSubmissions = fulfilledResults
        .filter(r => r.status === 'success')
        .map(r => r.service);

    const failedSubmissions = fulfilledResults
        .filter(r => r.status === 'failed');

    if (successfulSubmissions.length > 0) {
        if (failedSubmissions.length > 0) {
             console.warn(`Partially successful submission. Failures:`, failedSubmissions);
        }
        return response.status(200).json({ success: true, services: successfulSubmissions });
    } else {
        console.error("All submissions failed:", failedSubmissions);
        // Combine error messages for a more informative response to the client
        const errorMessages = failedSubmissions.map(f => f.error).join('; ');
        return response.status(500).json({
            success: false,
            message: `Не удалось отправить заявку. Причина: ${errorMessages}`,
            errors: failedSubmissions
        });
    }
}