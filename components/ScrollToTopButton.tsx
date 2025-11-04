
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-500 text-gray-900 shadow-lg hover:bg-amber-400 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;