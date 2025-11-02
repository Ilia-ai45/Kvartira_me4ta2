import React, { useRef, useEffect } from 'react';

const TextReveal: React.FC<{ text: string; baseDelay?: number; className: string; }> = ({ text, baseDelay = 0, className }) => {
    return (
        <p className={className}>
            {text.split(' ').map((word, index) => (
                 <span key={index} className="inline-block overflow-hidden">
                    <span
                        className="word-reveal-child"
                        style={{ '--delay': `${baseDelay + index * 0.05}s` } as React.CSSProperties}
                    >
                        {word}&nbsp;
                    </span>
                 </span>
            ))}
        </p>
    );
};


const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const scrollY = window.scrollY;
                if (scrollY < window.innerHeight) {
                    videoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section className="relative h-[65vh] md:h-[80vh] w-full flex items-center justify-center text-center overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dsajhtkyy/video/upload/q_auto:eco,f_auto,w_1600,c_limit/v1761565958/%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%B9_%D1%84%D0%BE%D0%BD_16-9_jq1thh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-white">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="animate-reveal">
                        <TextReveal 
                            text="Купить квартиру выгодно в новостройке Тюмени"
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
                        />
                        <TextReveal 
                            text="Помогу найти и купить квартиру мечты без комиссии и переплат, по сниженым ценам."
                            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                            baseDelay={0.5}
                        />
                    </div>
                    <button
                        onClick={handleScrollToContact}
                        className="animate-reveal anim-fade-up bg-amber-500 text-gray-900 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300"
                        style={{'--delay': '1s'} as React.CSSProperties}
                    >
                        КУПИТЬ КВАРТИРУ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;