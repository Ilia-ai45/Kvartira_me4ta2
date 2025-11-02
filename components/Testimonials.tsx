

import React, { useState, useMemo, useEffect } from 'react';
import { CheckIcon } from './icons/CheckIcon';

const cases = [
    {
        title: "ЖК 'Европейский берег'",
        subtitle: "2-комнатная для молодой семьи",
        imageUrls: [
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761740649/XXXL_pbux11.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761740647/XXXL_3_jtrksz.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761740632/XXXL_1_xe818h.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761740622/photo_2025-09-09_15-22-08_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_thjv1i.jpg"
        ],
        results: [
            "Сэкономили 350 000 ₽ на скидке от застройщика",
            "Одобрили IT-ипотеку под 5%",
            "Сделка проведена за 7 дней"
        ]
    },
    {
        title: "ЖК 'Новин квартал'",
        subtitle: "Студия для инвестиций",
        imageUrls: [
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761742393/XXXL_hgwjod.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761742391/XXXL_4_mcwtq2.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761742389/XXXL_2_n4bdhc.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761742388/XXXL_1_cfgthc.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761742378/photo_2025-10-29_17-51-38_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_zzkmyz.jpg"
        ],
        results: [
            "Найден вариант на 200 000 ₽ ниже рынка",
            "Проведена полная юридиеская проверка",
            "Дистанционная сделка для клиента из Сургута"
        ]
    },
    {
        title: "ЖК 'Ария'",
        subtitle: "3-шка для многодетной семьи",
        imageUrls: [
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743077/XXXL_3_ahzsg9.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743081/XXXL_aczcrm.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743077/XXXL_2_ftizzj.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743080/XXXL_4_a4rgo2.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743076/XXXL_1_kxkwhy.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761743083/photo_2025-10-29_18-02-49_nxcsql.jpg"
        ],
        results: [
            "Найден эксклюзивный вариант, не доступный в открытой продаже",
            "Помощь в одобрении сложной ипотеки",
            "Организован ускоренный выход на сделку",
            "Анастасия, Я вас не забыла, ваш кейс как обещала выкладываю)"
        ]
    },
    {
        title: "ЖК 'Сердце Сибири'",
        subtitle: "Квартира-студия для студента",
        imageUrls: [
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761745349/XXXL_2_c1ikt0.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761745350/XXXL_5_s1qpbs.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761745352/XXXL_tuvlbo.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761745347/XXXL_1_ly7wto.webp",
            "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761745707/photo_2025-10-29_18-47-22_zk91xg.jpg"
        ],
        results: [
            "Помощь в получении ипотеки без первоначального взноса",
            "Квартира найдена и забронирована за 1 день",
            "Полное юридическое сопровождение на всех этапах"
        ]
    }
];

const testimonials = [
    {
        quote: "Дарья — настоящий профессионал! Помогла нам найти идеальную квартиру в новостройке и провела сделку от начала до конца. Очень благодарны за ее работу и терпение.",
        name: "Семья Ивановых",
        avatar: "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761748407/%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%8B_luxope.jpg"
    },
    {
        quote: "Рекомендую Дарью всем, кто ищет недвижимость в Тюмени. Она отлично знает рынок, всех застройщиков и всегда на связи. Сэкономила мне кучу времени и нервов.",
        name: "Алексей Тверин",
        avatar: "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761748606/%D1%82%D0%B2%D0%B5%D1%80%D0%B8%D0%BD_t8amvr.jpg"
    },
    {
        quote: "Это была наша первая покупка квартиры. Дарья все подробно объяснила, помогла с ипотекой и документами. Все прошло гладко и без стресса!",
        name: "Анна и Дмитрий",
        avatar: "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761748957/%D0%B0%D0%BD%D0%BD%D0%B0_%D0%B8_%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_nhp29i.jpg"
    },
    {
        quote: "Купили квартиру, находясь в другом городе. Дарья все организовала на высшем уровне: онлайн-показ, полное сопровождение сделки. Очень удобно и надежно!",
        name: "Екатерина, г. Новый Уренгой",
        avatar: "https://res.cloudinary.com/dsajhtkyy/image/upload/v1761749043/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_%D1%83%D1%80%D0%B5%D0%BD%D0%B3%D0%BE%D0%B9_fzav1m.jpg"
    }
];

const faqs = [
    {
        q: "Ваши услуги действительно бесплатны для меня?",
        a: (
            <>
                <p className="mb-4">
                    Да, абсолютно. Мою работу оплачивает застройщик по партнерскому договору.
                </p>
                <p className="font-semibold text-white mb-3">
                    Ваша прямая выгода работы со мной, а не напрямую с застройщиком:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-1">
                    <li>
                        Вы получаете мои <strong>персональные СКИДКИ</strong> у застройщика.
                    </li>
                    <li>
                        Получаете <strong>доступ к закрытому пулу квартир</strong> раньше момента общей публикации.
                    </li>
                    <li>
                        Получаете <strong>актуальные акционные предложения</strong> не от одного, а от всех застройщиков сразу по вашему запросу.
                    </li>
                </ul>
            </>
        )
    },
    {
        q: "Вы работаете со всеми застройщиками Тюмени?",
        a: <>Я работаю со всеми крупными и надежными застройщиками города, чья репутация безупречна, а качество подтверждено высокими оценками в рейтингах <a href="https://erzrf.ru/top-zastroyshchikov/tyumenskaya-oblast" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">ЕРЗ РФ</a>.</>
    },
    {
        q: "Что входит в услугу 'помощь с ипотекой'?",
        a: "Я помогаю правильно заполнить анкету, собрать необходимый пакет документов и отправить заявки в нескольких банков-партнеров, чтобы получить для вас лучшие условия по процентной ставке."
    },
    {
        q: "Можно ли купить квартиру, находясь в другом городе?",
        a: "Конечно. Я полностью организую дистанционную сделку: от онлайн-показов до электронной регистрации договора. Это удобно и безопасно."
    }
];

const FaqItem: React.FC<{ q: string, a: React.ReactNode, isOpen: boolean, onClick: () => void }> = ({ q, a, isOpen, onClick }) => (
    <div className="border-b border-stone-700 py-6">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left">
            <h3 className="text-lg font-semibold text-white">{q}</h3>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[30rem] pt-4' : 'max-h-0'}`}>
            <div className="text-gray-400 leading-relaxed">{a}</div>
        </div>
    </div>
);

type CaseCardProps = {
    caseItem: typeof cases[0];
};

const CaseCard: React.FC<CaseCardProps> = ({ caseItem }) => {
    const slides = useMemo(() => {
        if (caseItem.imageUrls.length <= 1) {
            return caseItem.imageUrls;
        }
        const first = caseItem.imageUrls[0];
        const last = caseItem.imageUrls[caseItem.imageUrls.length - 1];
        return [last, ...caseItem.imageUrls, first];
    }, [caseItem.imageUrls]);

    const [currentIndex, setCurrentIndex] = useState(slides.length > 1 ? 1 : 0);
    const [transitionClass, setTransitionClass] = useState('transition-transform ease-out duration-500');

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setTransitionClass('');
            setCurrentIndex(slides.length - 2);
        }
        if (currentIndex === slides.length - 1) {
            setTransitionClass('');
            setCurrentIndex(1);
        }
    };
    
    useEffect(() => {
        if (transitionClass === '') {
            const timer = setTimeout(() => setTransitionClass('transition-transform ease-out duration-500'), 50);
            return () => clearTimeout(timer);
        }
    }, [transitionClass]);

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (slides.length <= 1) return;
        setCurrentIndex(prev => prev - 1);
    };

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (slides.length <= 1) return;
        setCurrentIndex(prev => prev + 1);
    };
    
    const goToSlide = (slideIndex: number) => {
        if (slides.length <= 1) return;
        setTransitionClass('transition-transform ease-out duration-500');
        setCurrentIndex(slideIndex + 1);
    };
    
    const getDotIndex = () => {
        if (slides.length <= 1) return 0;
        if (currentIndex === 0) return caseItem.imageUrls.length - 1;
        if (currentIndex === slides.length - 1) return 0;
        return currentIndex - 1;
    }
    
    const dotIndex = getDotIndex();

    return (
        <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden border border-stone-700 flex flex-col h-full">
            <div className="relative h-56 w-full overflow-hidden group bg-[#A6937B]">
                <div 
                    className={`flex h-full ${transitionClass}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {slides.map((url, index) => (
                        <img key={index} src={url} alt={`${caseItem.title} - фото ${index + 1}`} className="w-full h-full object-contain flex-shrink-0" loading="lazy" />
                    ))}
                </div>
                
                <button onClick={prevSlide} aria-label="Previous image" className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 focus:outline-none z-10 hover:bg-black/75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button onClick={nextSlide} aria-label="Next image" className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 focus:outline-none z-10 hover:bg-black/75">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                    {caseItem.imageUrls.map((_, slideIndex) => (
                        <button key={slideIndex} onClick={() => goToSlide(slideIndex)} aria-label={`Go to image ${slideIndex + 1}`} className={`w-2 h-2 rounded-full transition-colors ${dotIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-800/50 hover:bg-gray-800/75'}`}></button>
                    ))}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-white">{caseItem.title}</h3>
                <p className="text-gray-400 mb-4">{caseItem.subtitle}</p>
                <ul className="space-y-2 text-sm mt-auto">
                    {caseItem.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-gray-300">{result}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ContentSections: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleFaqClick = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <section id="cases" className="py-24 bg-stone-900">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal anim-fade-up">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Реальные кейсы и решённые задачи</h2>
                        <p className="text-base sm:text-lg text-gray-400">
                           Лучше всего о моей работе говорят результаты моих клиентов.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {cases.map((caseItem, index) => (
                           <div key={index} className="animate-reveal anim-fade-up" style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}>
                               <CaseCard caseItem={caseItem} />
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="reviews" className="py-24 bg-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal anim-fade-up">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Что говорят мои клиенты</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-zinc-800 p-8 rounded-lg shadow-md border border-zinc-700 flex flex-col h-full animate-reveal anim-scale-in" style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}>
                                <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-auto">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12 animate-reveal anim-fade-up" style={{'--delay': '0.3s'} as React.CSSProperties}>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeq5sb8wdBZxFAZWSXqgTcWH4DQ3WOcgHlDPRY_FyIJyWz06g/viewform?usp=sharing&ouid=110097416081346053566" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-amber-500 text-gray-900 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300"
                        >
                            Оставить отзыв
                        </a>
                    </div>
                </div>
            </section>
            
            <section id="faq" className="py-24 bg-stone-900 overflow-hidden">
                 <div className="container mx-auto px-6 max-w-6xl">
                    <div className="lg:flex lg:gap-16 items-start">
                        <div className="lg:w-5/12 mb-12 lg:mb-0 lg:sticky lg:top-24 animate-reveal anim-slide-right">
                            <div className="relative rounded-2xl shadow-2xl w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
                                <img 
                                    src="https://res.cloudinary.com/dsajhtkyy/image/upload/v1761838062/photo_2025-10-29_17-49-52_ut603i.jpg" 
                                    alt="Дарья Бугровская, эксперт по недвижимости в Тюмени" 
                                    className="w-full h-[90vh] min-h-[650px] max-h-[850px] object-cover object-top"
                                    loading="lazy"
                                />
                                <div 
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(to top, #1c1917 0%, transparent 8%)' }}
                                ></div>
                            </div>
                        </div>
                        <div className="lg:w-7/12">
                            <div className="text-center lg:text-left mb-12 animate-reveal anim-fade-up">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Остались вопросы? <br/> Я здесь, чтобы помочь!</h2>
                            </div>
                            <div>
                                {faqs.map((faq, index) => (
                                    <div className="animate-reveal anim-fade-up" style={{'--delay': `${index * 0.1}s`} as React.CSSProperties} key={index}>
                                        <FaqItem q={faq.q} a={faq.a} isOpen={openFaq === index} onClick={() => handleFaqClick(index)} />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 bg-stone-800 border-l-4 border-amber-500 p-8 rounded-lg shadow-lg animate-reveal anim-fade-up" style={{'--delay': '0.4s'} as React.CSSProperties}>
                                <p className="font-semibold text-base sm:text-lg text-white mb-4">
                                    Зачастую, обращаясь напрямую к застройщику, клиенты уходят с базовыми ценами и квартирами, которые плохо продаются.
                                </p>
                                <p className="text-gray-300 mb-4 font-semibold">Работая со мной, Вы получаете:</p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                        <span><strong className="text-white">Лучшие предложения</strong>, которые зачастую ниже рынка.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                        <span>Доступ к лучшим предложениям от <strong className="text-white">всех застройщиков</strong> города.</span>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                        <span>Доступ к <strong className="text-white">новым квартирам</strong>, еще не открытым к продажам.</span>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                        <span>Фиксируем <strong className="text-white">персональные скидки</strong> до 7 дней.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
        </>
    );
};

export default ContentSections;