// File path: /api/sendMessage.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const formatCurrency = (value: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const {
            TELEGRAM_BOT_TOKEN,
            TELEGRAM_CHAT_ID,
        } = process.env;

        // 1. Проверка наличия переменных окружения
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error("SERVER CONFIG ERROR: Telegram environment variables (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) are not set in Vercel.");
            return response.status(500).json({
                success: false,
                message: 'Не удалось отправить заявку. Причина: неверная конфигурация сервера (Telegram).'
            });
        }
        
        const formData = request.body;
        if (!formData.name || !formData.phone) {
            return response.status(400).json({ message: 'Имя и телефон обязательны.' });
        }

        // 2. Формирование сообщения
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

        // 4. Обработка ответа от Telegram API
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