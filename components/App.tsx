

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyMe from './About';
import HowItWorks from './Services';
import MortgageCalculator from './MortgageCalculator';
import ContentSections from './Testimonials';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Map from './Map';
import GeminiModal from './GeminiModal';
import PrivacyPolicy from './PrivacyPolicy';

const App: React.FC = () => {
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Start animation when 10% of the element is visible
            }
        );

        const elements = document.querySelectorAll('.animate-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    
    useEffect(() => {
        const isModalOpen = selectedDistrict !== null || isPolicyModalOpen;
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to ensure scroll is restored on component unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedDistrict, isPolicyModalOpen]);


    // Lifted state from MortgageCalculator
    const [propertyPrice, setPropertyPrice] = useState(5000000);
    const [downPayment, setDownPayment] = useState(1000000);
    const [loanTerm, setLoanTerm] = useState(20);
    const [interestRate, setInterestRate] = useState(5.7);
    const [quickDealDiscount, setQuickDealDiscount] = useState(false);


    // State to control the ContactForm version
    const [showExtendedForm, setShowExtendedForm] = useState(false);

    const monthlyPayment = useMemo(() => {
        const principal = propertyPrice - downPayment;
        if (principal <= 0) return 0;
        const monthlyRate = interestRate / 12 / 100;
        const numberOfPayments = loanTerm * 12;
        if (monthlyRate === 0) return principal / numberOfPayments;
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        return isNaN(payment) ? 0 : payment;
    }, [propertyPrice, downPayment, loanTerm, interestRate]);

    const handleCalculatorSubmit = () => {
        setShowExtendedForm(true);
    };
    
    const handlePlacemarkClick = useCallback((districtName: string) => {
        setSelectedDistrict(districtName);
    }, []);

    const handleCloseModal = () => {
        setSelectedDistrict(null);
    };

    return (
        <div className="text-gray-200">
            <Header />
            <main>
                <Hero />
                <WhyMe />
                <HowItWorks />
                <ContentSections />
                <MortgageCalculator 
                    propertyPrice={propertyPrice}
                    setPropertyPrice={setPropertyPrice}
                    downPayment={downPayment}
                    setDownPayment={setDownPayment}
                    loanTerm={loanTerm}
                    setLoanTerm={setLoanTerm}
                    interestRate={interestRate}
                    setInterestRate={setInterestRate}
                    monthlyPayment={monthlyPayment}
                    onCalculateSubmit={handleCalculatorSubmit}
                    quickDealDiscount={quickDealDiscount}
                    setQuickDealDiscount={setQuickDealDiscount}
                />
                <Map onPlacemarkClick={handlePlacemarkClick} />
                <ContactForm 
                    showExtended={showExtendedForm}
                    calculatorData={{
                        propertyPrice,
                        downPayment,
                        interestRate,
                        monthlyPayment,
                        quickDealDiscount,
                    }}
                    onPolicyClick={() => setIsPolicyModalOpen(true)}
                />
            </main>
            <Footer onPolicyClick={() => setIsPolicyModalOpen(true)} />
            <GeminiModal districtName={selectedDistrict} onClose={handleCloseModal} />
            <PrivacyPolicy isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
        </div>
    );
};

export default App;