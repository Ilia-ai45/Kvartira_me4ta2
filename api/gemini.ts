// File path: /api/gemini.ts
import { GoogleGenAI } from '@google/genai';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const { API_KEY } = process.env;
    if (!API_KEY) {
        return response.status(500).json({ message: 'Gemini API key is not configured.' });
    }

    const { districtName } = request.body;
    if (!districtName) {
        return response.status(400).json({ message: 'District name is required.' });
    }

    try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const prompt = `Краткий обзор района "${districtName}" в Тюмени для покупки квартиры. Основные плюсы: инфраструктура (школы, парки), транспорт, атмосфера. Для кого подходит (семьи, молодежь, и т.д.)? Ответ в 3-4 предложениях, без вступлений.`;

        const geminiResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "Ты — ассистент риэлтора в Тюмени. Предоставь краткую, емкую и привлекательную характеристику района для покупателя квартиры. Отвечай на русском языке. Будь объективен, но подчеркни плюсы.",
                tools: [{ googleSearch: {} }],
            }
        });

        // More robust response validation
        if (!geminiResponse || !geminiResponse.candidates || geminiResponse.candidates.length === 0) {
            console.error("Gemini API returned an empty or invalid response:", geminiResponse);
            const promptFeedback = geminiResponse?.promptFeedback;
            if (promptFeedback?.blockReason) {
                return response.status(400).json({ message: `Запрос был заблокирован из-за настроек безопасности: ${promptFeedback.blockReason}` });
            }
            return response.status(500).json({ message: 'AI-ассистент не смог сгенерировать ответ.' });
        }

        const textContent = geminiResponse.text;
        const groundingChunks = geminiResponse.candidates[0]?.groundingMetadata?.groundingChunks;

        let sourcesFromApi = [];
        if (groundingChunks) {
            sourcesFromApi = groundingChunks
                .map((chunk: any) => ({
                    uri: chunk.web?.uri,
                    title: chunk.web?.title,
                }))
                .filter((source: { uri: string; title: string }) => !!source.uri && !!source.title);
        }
        
        return response.status(200).json({ content: textContent || '', sources: sourcesFromApi });

    } catch (error) {
        console.error("Error in Gemini API handler:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return response.status(500).json({ message: `Не удалось получить информацию о районе. Ошибка: ${errorMessage}` });
    }
}