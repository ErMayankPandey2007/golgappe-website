import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTag, FaClock, FaPercentage, FaRupeeSign } from 'react-icons/fa';

const OfferSlider = () => {
    const [offers, setOffers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchOffers();
    }, []);

    useEffect(() => {
        if (offers.length > 0) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % offers.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [offers.length]);

    const fetchOffers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/active`);
            const data = await response.json();
            console.log('Offers fetched:', data);
            setOffers(data.offers || []);
        } catch (error) {
            console.error('Failed to fetch offers:', error);
        }
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % offers.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);

    console.log('Current offers:', offers);

    if (offers.length === 0) return null;

    const getDaysLeft = (expiryDate) => {
        const days = Math.ceil((new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
        return days > 0 ? days : 0;
    };

    return (
        <div className="w-full">
            {/* Heading Section */}
            <div className="text-center mb-8 md:mb-12">
                <span className="text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block animate-pulse">🎉 Limited Time Offers</span>
                <h2 className="text-4xl md:text-6xl font-display text-secondary mb-3 md:mb-4 leading-tight">Today's <span className="text-primary italic">Hot Deals</span></h2>
                <p className="text-text-muted text-base md:text-lg italic">Save big on your favorite items!</p>
            </div>

            {/* Slider */}
            <div className="relative w-full">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                    {offers.map((offer, index) => (
                        <div
                            key={offer._id}
                            className={`transition-all duration-700 ${index === currentIndex ? 'block' : 'hidden'}`}
                        >
                            <div className="grid md:grid-cols-2 gap-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                                {/* Image Section */}
                                <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                                        {offer.discountType === 'percentage' ? `${offer.discountValue}% OFF` : `₹${offer.discountValue} OFF`}
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-6 md:p-12 flex flex-col justify-center">
                                    {/* Offer Code Badge */}
                                    <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full w-fit mb-6 shadow-lg">
                                        <FaTag className="text-xl" />
                                        <span className="font-black text-xl tracking-wider">{offer.code}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4 leading-tight">{offer.title}</h3>

                                    {/* Description */}
                                    <p className="text-text-muted text-lg md:text-xl mb-6 leading-relaxed">{offer.description}</p>

                                    {/* Offer Details Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-white p-4 rounded-xl shadow-md border border-primary/10">
                                            <div className="flex items-center gap-3 mb-2">
                                                {offer.discountType === 'percentage' ? <FaPercentage className="text-primary text-2xl" /> : <FaRupeeSign className="text-primary text-2xl" />}
                                                <span className="text-xs text-gray-500 uppercase font-bold">Discount</span>
                                            </div>
                                            <p className="text-2xl font-black text-secondary">
                                                {offer.discountType === 'percentage' ? `${offer.discountValue}%` : `₹${offer.discountValue}`}
                                            </p>
                                        </div>

                                        <div className="bg-white p-4 rounded-xl shadow-md border border-primary/10">
                                            <div className="flex items-center gap-3 mb-2">
                                                <FaClock className="text-primary text-2xl" />
                                                <span className="text-xs text-gray-500 uppercase font-bold">Expires In</span>
                                            </div>
                                            <p className="text-2xl font-black text-secondary">{getDaysLeft(offer.expiryDate)} Days</p>
                                        </div>
                                    </div>

                                    {/* Additional Info */}
                                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Min Order:</span>
                                            <span className="font-bold text-secondary">₹{offer.minOrderAmount}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm mt-2">
                                            <span className="text-gray-600">Remaining Uses:</span>
                                            <span className="font-bold text-primary">{offer.maxUses - offer.usedCount}/{offer.maxUses}</span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="bg-primary hover:bg-primary-dark text-white font-black text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 uppercase tracking-wider">
                                        Shop Now & Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                {offers.length > 1 && (
                    <>
                        <button onClick={prevSlide} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-10">
                            <FaChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                        <button onClick={nextSlide} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-10">
                            <FaChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {offers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8 md:w-12' : 'bg-gray-300 w-2'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default OfferSlider;
