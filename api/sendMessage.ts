// File path: /api/sendMessage.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

const formatCurrency = (value: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const {
            TELEGRAM_BOT_TOKEN,
            TELEGRAM_CHAT_ID,
            GOOGLE_PRIVATE_KEY,
            GOOGLE_CLIENT_EMAIL,
            GOOGLE_SHEET_ID,
        } = process.env;

        // 1. Проверка наличия переменных окружения
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error("SERVER CONFIG ERROR: Telegram environment variables are not set.");
            return response.status(500).json({
                success: false,
                message: 'Не удалось отправить заявку. Причина: неверная конфигурация сервера (Telegram).'
            });
        }
        
        const formData = request.body;
        if (!formData.name || !formData.phone) {
            return response.status(400).json({ message: 'Имя и телефон обязательны.' });
        }

        // 2. Формирование сообщения для Telegram
        const messageTitle = formData.showExtended ? `*Новая заявка на подбор!*` : `*Запрос на консультацию!*`;
        let message = `${messageTitle}\n\n*Имя:* ${formData.name}\n*Телефон:* \`${formData.phone}\``;

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

        // 3. Отправка в Telegram
        const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        
        const telegramResponse = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
            signal: AbortSignal.timeout(10000) // 10-секундный таймаут
        });

        if (!telegramResponse.ok) {
             const errorData = await telegramResponse.json();
             const description = errorData.description || 'Unknown Telegram API error';
             console.error(`Telegram API Error: ${description}`, errorData);
             let userMessage = `Ошибка отправки в Telegram.`;
             if (description.includes('chat not found')) {
                userMessage = 'Ошибка конфигурации: чат для уведомлений не найден. Проверьте TELEGRAM_CHAT_ID.'
             } else if (description.includes('bot token')) {
                userMessage = 'Ошибка конфигурации: неверный токен Telegram бота. Проверьте TELEGRAM_BOT_TOKEN.'
             }
             return response.status(500).json({
                 success: false,
                 message: `Не удалось отправить заявку. ${userMessage}`
             });
        }

        // 4. Отправка в Google Sheets (не блокирует успешный ответ, если Telegram сработал)
        try {
            if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
                console.warn("SERVER CONFIG WARNING: Google Sheets environment variables are not set. Skipping sheet update.");
            } else {
                const auth = new google.auth.JWT(
                    GOOGLE_CLIENT_EMAIL,
                    undefined,
                    GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    ['https://www.googleapis.com/auth/spreadsheets']
                );

                const sheets = google.sheets({ version: 'v4', auth });
                const now = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
                
                let rowValues: (string | number)[];

                if (formData.showExtended && formData.calculatorData) {
                    const { calculatorData, rooms, priority } = formData;
                    rowValues = [
                        now,
                        formData.name,
                        formData.phone,
                        'Подбор (с калькулятора)',
                        formatCurrency(calculatorData.propertyPrice),
                        formatCurrency(calculatorData.downPayment),
                        formatCurrency(calculatorData.monthlyPayment),
                        `${calculatorData.interestRate}%`,
                        calculatorData.quickDealDiscount ? 'Да' : 'Нет',
                        rooms || 'Не указано',
                        priority || 'Не указано'
                    ];
                } else {
                     rowValues = [
                        now,
                        formData.name,
                        formData.phone,
                        'Консультация',
                        '', '', '', '', '', '', '' // Пустые ячейки для сохранения структуры
                    ];
                }

                await sheets.spreadsheets.values.append({
                    spreadsheetId: GOOGLE_SHEET_ID,
                    range: 'Лист1!A1', // Appends to the first empty row of the table
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [rowValues],
                    },
                });
            }
        } catch (sheetsError) {
            console.error("Google Sheets API Error:", sheetsError);
            // Не отправляем ошибку клиенту, так как основная функция (Telegram) выполнена
        }
        
        // 5. Успешный ответ
        return response.status(200).json({ success: true });

    } catch (error: any) {
        console.error("Unhandled error in sendMessage handler:", error);
        
        let errorMessage = 'Произошла внутренняя ошибка сервера.';
        if (error.name === 'TimeoutError') {
            errorMessage = 'Не удалось отправить заявку. Сервер Telegram не отвечает, попробуйте позже.'
        }

        return response.status(500).json({
            success: false,
            message: errorMessage,
        });
    }
}