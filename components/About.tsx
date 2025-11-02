
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const benefits = [
    {
        title: "Инженерный контроль качества",
        description: "Вижу все технические нюансы и скрытые дефекты, защищая вас от некачественного жилья."
    },
    {
        title: "Экономия до 500 000 ₽",
        description: "Знаю все акции застройщиков и помогу получить лучшие условия по ипотеке."
    },
    {
        title: "0₽ комиссия для вас",
        description: "Мои услуги полностью бесплатны — мою работу оплачивает застройщик."
    },
    {
        title: "Вся база новостроек",
        description: "Предоставляю объективный выбор из всех ЖК города, а не продвигаю 'удобные' варианты."
    }
];

const BenefitItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-gray-900/50 border-2 border-amber-400 rounded-full w-10 h-10 flex items-center justify-center">
             <CheckIcon className="w-5 h-5 text-amber-400" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);


const WhyMe: React.FC = () => {
    const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <section id="why-me" className="relative py-24 overflow-hidden">
             <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dsajhtkyy/video/upload/q_auto:good,f_auto,w_1600,c_limit/v1761923055/engineers_2_jsw9lv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10"></div>

            <div className="relative z-20 container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                     <div className="animate-reveal anim-fade-up">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Инженерный подход к выбору вашей идеальной квартиры</h2>
                        <p className="text-base sm:text-lg text-gray-300 mb-12">
                           Я защищаю ваши интересы на каждом этапе, <br/>
                            чтобы вы получили лучшее предложение на рынке без рисков и переплат.
                        </p>
                     </div>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 text-left">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={benefit.title} 
                                className={`animate-reveal ${index % 2 === 0 ? 'anim-slide-right' : 'anim-slide-left'}`} 
                                style={{'--delay': `${Math.floor(index / 2) * 0.15}s`} as React.CSSProperties}
                            >
                                <BenefitItem {...benefit} />
                            </div>
                        ))}
                    </div>
                     <div className="mt-16 animate-reveal anim-fade-up" style={{'--delay': '0.4s'} as React.CSSProperties}>
                        <button
                            onClick={handleScrollToContact}
                            className="bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300"
                        >
                            Получить консультацию
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMe;