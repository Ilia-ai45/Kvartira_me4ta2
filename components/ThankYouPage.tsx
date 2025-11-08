import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ThankYouPageProps {
    onPolicyClick: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onPolicyClick }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
        if (typeof window.ym === 'function') {
            console.log('Яндекс.Метрика: Отправляю просмотр страницы /thank-you');
            window.ym(105136960, 'hit', window.location.href, {
                title: 'Спасибо за заявку',
                callback: () => {
                    console.log('%cЯндекс.Метрика: ✔️ Просмотр страницы /thank-you успешно отправлен!', 'color: #22c55e; font-size: 14px; font-weight: bold;');
                }
            });
        }
    }, []);

    return (
        <div className="text-gray-800 dark:text-gray-200 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-zinc-700">
                        <div className="text-amber-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Спасибо!</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Ваша заявка успешно отправлена. Я свяжусь с вами в ближайшее время!</p>
                        <a
                            href="/"
                            className="inline-block bg-amber-500 text-gray-900 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300"
                        >
                            Вернуться на главную
                        </a>
                    </div>
                </div>
            </main>
            <Footer onPolicyClick={onPolicyClick} />
        </div>
    );
};

export default ThankYouPage;