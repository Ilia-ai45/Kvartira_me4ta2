
import React, { useMemo } from 'react';

const formatCurrency = (value: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);

const CalculatorInput: React.FC<{label: string, value: string, min: number, max: number, step: number, currentValue: number, onChange: (val: number) => void}> = 
({label, value, min, max, step, currentValue, onChange}) => (
    <div>
        <label className="block font-semibold text-gray-300 mb-2">{label}</label>
        <input type="text" value={value} readOnly className="w-full bg-zinc-700 border-zinc-600 rounded-lg text-lg p-3 font-bold text-white text-right mb-2 shadow-sm" />
        <input type="range" min={min} max={max} step={step} value={currentValue} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
    </div>
);

interface MortgageCalculatorProps {
    propertyPrice: number;
    setPropertyPrice: (value: number) => void;
    downPayment: number;
    setDownPayment: (value: number) => void;
    loanTerm: number;
    setLoanTerm: (value: number) => void;
    interestRate: number;
    setInterestRate: (value: number) => void;
    monthlyPayment: number;
    onCalculateSubmit: () => void;
    quickDealDiscount: boolean;
    setQuickDealDiscount: (value: boolean) => void;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
    propertyPrice,
    setPropertyPrice,
    downPayment,
    setDownPayment,
    loanTerm,
    setLoanTerm,
    interestRate,
    setInterestRate,
    monthlyPayment,
    onCalculateSubmit,
    quickDealDiscount,
    setQuickDealDiscount,
}) => {
    const downPaymentPercentage = useMemo(() => {
        return propertyPrice > 0 ? (downPayment / propertyPrice) * 100 : 0;
    }, [downPayment, propertyPrice]);
    
    const handleDownPaymentChange = (value: number) => {
        setDownPayment(Math.min(value, propertyPrice));
    }

    const handleGetSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onCalculateSubmit();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="calculator" className="py-24 bg-zinc-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal anim-fade-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ипотечный калькулятор</h2>
                    <p className="text-base sm:text-lg text-gray-400">
                        Рассчитайте ежемесячный платеж, чтобы оценить свои возможности и быть увереннее в выборе.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 bg-zinc-800 p-4 md:p-8 rounded-2xl shadow-lg border border-zinc-700">
                    <div className="lg:col-span-3 space-y-6 animate-reveal anim-slide-right">
                        <CalculatorInput label="Стоимость недвижимости" value={formatCurrency(propertyPrice)} min={1000000} max={20000000} step={100000} currentValue={propertyPrice} onChange={setPropertyPrice} />
                        <CalculatorInput label={`Первоначальный взнос (${downPaymentPercentage.toFixed(0)}%)`} value={formatCurrency(downPayment)} min={0} max={propertyPrice} step={50000} currentValue={downPayment} onChange={handleDownPaymentChange} />
                         <CalculatorInput label="Срок кредита (лет)" value={`${loanTerm} лет`} min={1} max={30} step={1} currentValue={loanTerm} onChange={setLoanTerm} />
                         <div>
                            <label className="block font-semibold text-gray-300 mb-2">Процентная ставка, %</label>
                            <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full bg-zinc-700 border-zinc-600 rounded-lg text-lg p-3 font-bold text-white text-right shadow-sm" />
                        </div>
                        <div className="pt-2">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors">
                                <input 
                                    type="checkbox" 
                                    checked={quickDealDiscount} 
                                    onChange={e => setQuickDealDiscount(e.target.checked)} 
                                    className="form-checkbox h-5 w-5 text-amber-500 bg-zinc-600 border-zinc-500 rounded focus:ring-amber-500" 
                                />
                                <span className="text-white font-semibold">минус 100 000 руб за быстрый выход на сделку</span>
                            </label>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-zinc-950 text-white p-8 rounded-xl flex flex-col justify-center text-center shadow-2xl border border-amber-500/30 animate-reveal anim-slide-left" style={{'--delay': '0.2s'} as React.CSSProperties}>
                         <p className="font-semibold text-gray-300">Хотите получить список квартир под этот ежемесячный платеж?</p>
                         <p className="text-4xl sm:text-5xl font-extrabold tracking-tight my-4 text-amber-400">{formatCurrency(monthlyPayment)}</p>
                        <button 
                            onClick={handleGetSelection}
                            className="w-full bg-amber-500 text-gray-900 font-bold mt-6 py-3 rounded-full shadow-md hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all duration-300"
                        >
                            Получить подборку квартир
                        </button>
                        <p className="text-xs mt-4 opacity-70">Это бесплатно и ни к чему не обязывает.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;