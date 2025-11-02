
import React from 'react';

const steps = [
    {
        num: "01",
        title: "Консультация и подбор",
        description: "За 20 минут выясняем ваши цели. В течение дня я готовлю персональную подборку из 5-7 лучших вариантов, соответствующих вашему запросу."
    },
    {
        num: "02",
        title: "Совместный просмотр",
        description: "Организую показы в удобное для вас время. На месте как инженер указываю на все реальные плюсы и минусы каждого объекта."
    },
    {
        num: "03",
        title: "Одобрение ипотеки",
        description: "Помогаю собрать документы и отправляю заявки в несколько банков-партнеров, чтобы получить для вас самую выгодную процентную ставку."
    },
    {
        num: "04",
        title: "Безопасная сделка",
        description: "Полностью сопровождаю подписание договора и регистрацию, гарантируя юридическую чистоту до момента получения вами ключей."
    }
];

const StepCard: React.FC<typeof steps[0]> = ({ num, title, description }) => (
    <div className="relative pl-16">
        <div className="absolute left-0 top-0 h-12 w-12 bg-gray-800/60 backdrop-blur-sm border-2 border-amber-400 text-amber-400 rounded-full flex items-center justify-center font-bold text-xl">
            {num}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);


const HowItWorks: React.FC = () => {
    return (
        <section id="process" className="relative py-24 overflow-hidden">
             <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dsajhtkyy/video/upload/q_auto:good,f_auto,w_1600,c_limit/v1761727502/8440330-hd_1920_1080_25fps_mwneby.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

            <div className="relative z-20 container mx-auto px-6">
                <div className="lg:flex lg:gap-16">
                    <div className="lg:w-1/3 lg:sticky lg:top-28 self-start text-center lg:text-left mb-16 lg:mb-0">
                         <div className="animate-reveal anim-fade-up">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Процесс покупки квартиры — просто и прозрачно</h2>
                            <p className="text-base sm:text-lg text-gray-300">
                            Всего 4 шага отделяют вас от новоселья. Я буду рядом на каждом из них, чтобы все прошло идеально.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-1 gap-x-12 gap-y-16">
                        {steps.map((step, index) => (
                            <div key={step.num} className="animate-reveal anim-fade-up" style={{'--delay': `${index * 0.15}s`} as React.CSSProperties}>
                                <StepCard {...step}/>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;