import React, { useState, useEffect } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { useTheme } from './ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg dark:shadow-black/20' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center group">
                    <div
                        role="img"
                        aria-label="Логотип Дарья Бугровская"
                        className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3"
                        style={{
                            backgroundColor: '#22c55e', // green-500
                            maskImage: 'url(https://res.cloudinary.com/dsajhtkyy/image/upload/v1761837364/Generated_Image_October_29_2025_-_12_07PM-no-bg-preview_carve.photos_vo1uyc.png)',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url(https://res.cloudinary.com/dsajhtkyy/image/upload/v1761837364/Generated_Image_October_29_2025_-_12_07PM-no-bg-preview_carve.photos_vo1uyc.png)',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            transition: 'background-color 0.3s ease-in-out',
                        }}
                    ></div>
                    <span className="text-base sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-400 transition-colors">
                        Дарья Бугровская
                    </span>
                </a>
                
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+79959403755"
                        className="flex text-sm sm:text-lg font-semibold text-gray-900 dark:text-white hover:text-amber-400 hover:underline transition-colors items-center whitespace-nowrap"
                        title="Нажмите, чтобы позвонить"
                    >
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        +7 (995) 940-37-55
                    </a>
                    <button
                        onClick={toggleTheme}
                        aria-label="Переключить тему"
                        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;