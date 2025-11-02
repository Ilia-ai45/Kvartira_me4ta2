
import React, { useState, useEffect } from 'react';
import { districtData } from './data/districts';

interface GeminiModalProps {
    districtName: string | null;
    onClose: () => void;
}

const GeminiModal: React.FC<GeminiModalProps> = ({ districtName, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState<React.ReactNode | null>(null);
    
    useEffect(() => {
        if (!districtName) {
            return;
        }

        setIsLoading(true);
        setContent(null);

        // Random delay between 1 and 2 seconds with a 0.2s step
        const randomDelay = 1000 + Math.floor(Math.random() * 6) * 200; 

        const timer = setTimeout(() => {
            const data = districtData[districtName];
            if (data) {
                setContent(data.description);
            } else {
                setContent('Подробная информация об этом районе скоро появится.');
            }
            setIsLoading(false);
        }, randomDelay);

        return () => clearTimeout(timer);
    }, [districtName]);

    if (!districtName) {
        return null;
    }
    
    let processedName = districtName;
    if (districtName.length > 20 && districtName.includes('микрорайон')) {
        processedName = districtName.replace('микрорайон', 'мкр.');
    }

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg border border-gray-700 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{ animationFillMode: 'forwards', animationDuration: '0.2s' }}
            >
                <div className="flex justify-between items-start p-5 border-b border-gray-700">
                    <h3 className="text-xl font-bold">
                        <span className="text-amber-500">Обзор района:</span>
                        <span className="block text-white mt-1 font-semibold">{processedName}</span>
                    </h3>
                    <button onClick={onClose} aria-label="Close modal" className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="p-6 min-h-[250px] max-h-[60vh] overflow-y-auto">
                    {isLoading ? (
                        <div className="flex flex-col justify-center items-center h-full text-center">
                            <div className="w-8 h-8 border-4 border-t-amber-500 border-gray-600 rounded-full animate-spin"></div>
                            <p className="mt-4 text-gray-400">Ассистент подбирает информацию...</p>
                        </div>
                    ) : (
                        <div className="text-gray-300 leading-relaxed space-y-4">
                            {content}
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation-name: fade-in;
                    animation-duration: 0.3s;
                }
                @keyframes fade-in-scale {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-scale {
                    animation-name: fade-in-scale;
                }
            `}</style>
        </div>
    );
};

export default GeminiModal;
