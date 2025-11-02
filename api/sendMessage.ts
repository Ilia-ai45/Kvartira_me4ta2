// File path: /api/sendMessage.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
// Интеграция с Google Sheets временно отключена для отладки Telegram
// import { google } from 'googleapis';

const formatCurrency = (value: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID,
    } = process.env;

    const formData = request.body;

    if (!formData.name || !formData.phone) {
        return response.status(400).json({ message: 'Имя и телефон обязательны.' });
    }

    // --- Send to Telegram ---
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
        } catch (error: any) {
            console.error("--- ERROR SENDING TO TELEGRAM ---");
            console.error("Timestamp:", new Date().toISOString());
            console.error("Error Message:", error.message);
            const userFriendlyMessage = `Ошибка Telegram: ${error.message}. Проверьте токен и ID чата.`;
            return { status: 'failed', service: 'Telegram', error: userFriendlyMessage };
        }
    };

    // --- Execute Telegram task ONLY ---
    try {
        const result = await sendToTelegram();

        if (result.status === 'success') {
            return response.status(200).json({ success: true, services: [result.service] });
        } else if (result.status === 'failed') {
            // If it failed, send a specific error message.
            console.error("Telegram submission failed:", result);
            return response.status(500).json({
                success: false,
                message: `Не удалось отправить заявку. Причина: ${result.error}`,
                errors: [result]
            });
        } else { // Skipped
             console.warn("Telegram submission skipped due to missing config.");
             // This state should ideally not be reachable if the form is intended to work.
             return response.status(500).json({
                success: false,
                message: `Не удалось отправить заявку. Причина: неверная конфигурация сервера (Telegram).`
             });
        }
    } catch (e: any) {
        console.error("Unhandled error in handler:", e);
        return response.status(500).json({
            success: false,
            message: 'Произошла внутренняя ошибка сервера.',
        });
    }
}