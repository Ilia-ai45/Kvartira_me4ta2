import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;