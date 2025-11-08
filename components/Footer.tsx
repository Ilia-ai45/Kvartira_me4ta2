
import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { TelegramIcon } from './icons/TelegramIcon';

interface FooterProps {
    onPolicyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPolicyClick }) => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-8 md:mb-0 flex items-center">
                        <img 
                            src="https://res.cloudinary.com/dsajhtkyy/image/upload/v1761838066/%D0%B4%D0%B0%D1%88_ma1p03.jpg" 
                            alt="Портрет Дарьи Бугровской"
                            className="w-20 h-20 rounded-full mr-6 object-cover border-2 border-amber-500/30"
                            loading="lazy"
                        />
                        <div>
                            <a href="https://t.me/kvartirame4ta" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <h3 className="text-[22px] leading-snug md:text-2xl font-bold text-white mb-1 hover:text-amber-400 transition-colors">Дарья Бугровская</h3>
                            </a>
                            <p className="text-sm md:text-base text-gray-500">Эксперт по новостройкам Тюмени</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-3">
                         <a href="https://t.me/kvartirame4ta" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-white hover:opacity-80 transition-opacity">
                            <TelegramIcon className="w-5 h-5 mr-3"/>
                            <span className="text-blue-400">КВАРТИРА</span><span className="text-amber-500">МЕЧТЫ</span>
                         </a>
                         <a href="tel:+79959403755" className="flex items-center text-lg text-white hover:text-amber-400 hover:underline transition-colors" title="Нажмите, чтобы позвонить">
                            <PhoneIcon className="w-5 h-5 mr-3"/>
                            +7 (995) 940-37-55
                         </a>
                         <a href="mailto:daria.bugrovskaya@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                            <MailIcon className="w-5 h-5 mr-3"/>
                            daria.bugrovskaya@gmail.com
                         </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="max-w-4xl mx-auto text-xs text-gray-500 mb-6">
                        Сайт носит информационный характер, и не является публичной офертой. Проектная декларация опубликована на сайте <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400 transition-colors">наш.дом.рф</a>. Отправляя заявку, вы соглашаетесь на обработку персональных данных в соответствии с <button type="button" onClick={onPolicyClick} className="underline hover:text-amber-400 transition-colors focus:outline-none bg-transparent p-0 border-0">Политикой конфиденциальности</button>.
                    </p>
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Дарья Бугровская. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
