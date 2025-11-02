
// File path: /api/sendMessage.ts
// This code runs on a server (Vercel Serverless Function) and is not part of the frontend app.

export default async function handler(request, response) {
    // Only allow POST requests
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error("Telegram environment variables are not set.");
        return response.status(500).json({ message: 'Ошибка конфигурации сервера: не найдены ключи для Telegram.' });
    }
    
    // The request body is automatically parsed by Vercel for JSON content types
    const { message } = request.body;

    if (!message) {
        return response.status(400).json({ message: 'Тело запроса некорректно: отсутствует "message".' });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const telegramResponse = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown', // Allows using bold (*text*), italic (_text_) etc.
            }),
        });

        const data = await telegramResponse.json();

        if (!telegramResponse.ok) {
            // Forward the error from Telegram API for better debugging
            console.error('Telegram API Error:', data);
            throw new Error(`Ошибка API Telegram: ${data.description || 'Неизвестная ошибка'}`);
        }

        // Send a success response back to the frontend
        return response.status(200).json({ success: true });

    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        // Send a generic error response back to the frontend
        return response.status(500).json({ message: 'Не удалось отправить сообщение.' });
    }
}