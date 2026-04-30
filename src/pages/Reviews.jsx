import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar, FaQuoteRight, FaQuoteLeft, FaHeart, FaSmile } from 'react-icons/fa';

const Reviews = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const testimonials = [
        { name: "Rahul Sharma", rating: 5, text: "The most hygienic Gol Gappe I've ever had! The water is so flavorful and refreshing.", date: "2 days ago", image: "https://i.pravatar.cc/150?u=rahul" },
        { name: "Priya Gupta", rating: 5, text: "Dahi Puri is a must-try. The balance of sweet and spicy chutneys is perfect.", date: "1 week ago", image: "https://i.pravatar.cc/150?u=priya" },
        { name: "Amit Patel", rating: 4, text: "Great service and amazing taste. A bit crowded on weekends but totally worth the wait!", date: "3 days ago", image: "https://i.pravatar.cc/150?u=amit" },
        { name: "Sneha Reddy", rating: 5, text: "Authentic taste that reminds me of my childhood. Love their special Masala Puri.", date: "2 weeks ago", image: "https://i.pravatar.cc/150?u=sneha" },
        { name: "Vikram Singh", rating: 5, text: "Clean, consistent, and addictive. I'm a regular here and they never disappoint.", date: "5 days ago", image: "https://i.pravatar.cc/150?u=vikram" },
        { name: "Anjali Verma", rating: 5, text: "The packaging for takeaway is excellent. No leakage and the puris stayed crunchy!", date: "1 month ago", image: "https://i.pravatar.cc/150?u=anjali" }
    ];

    return (
        <div ref={containerRef} className="animate-fade-in bg-background overflow-hidden min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] mt-16 md:mt-20 flex items-center justify-center overflow-hidden bg-secondary">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
                        alt="Reviews Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center justify-center gap-1 md:gap-2 text-primary mb-6 md:mb-8 text-xl md:text-3xl">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
                            The <span className="text-primary italic">Verdict</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/70 font-display italic max-w-2xl mx-auto leading-relaxed">
                            "Honest love from our patrons who keep coming back for the perfect crunch."
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Stats */}
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-12 text-white/40 font-display tracking-widest uppercase text-[8px] md:text-xs z-10 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 md:gap-2"><span>10k+</span> Happy Smiles</div>
                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                    <div className="flex items-center gap-1.5 md:gap-2"><span>4.9/5</span> Google Rating</div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-premium relative group border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                            <FaQuoteRight className="absolute top-8 right-8 md:top-10 md:right-10 text-primary/5 text-5xl md:text-7xl group-hover:text-primary/10 transition-colors" />

                            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary transition-colors" />
                                    <div className="absolute -bottom-1.5 -right-1.5 bg-primary text-secondary p-1 rounded-md text-[10px]">
                                        <FaSmile />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-display text-secondary leading-tight">{item.name}</h4>
                                    <p className="text-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest">{item.date}</p>
                                </div>
                            </div>

                            <div className="flex gap-0.5 md:gap-1 text-primary text-xs mb-4 md:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < item.rating ? 'text-primary' : 'text-zinc-200'} />
                                ))}
                            </div>

                            <p className="text-text-muted leading-relaxed italic text-lg md:text-xl font-display">"{item.text}"</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Review */}
                <div className="mt-20 md:mt-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-secondary p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-premium"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-[100px]"></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-7xl font-display text-white mb-6 md:mb-8 leading-tight">Share Your <br /><span className="text-primary italic">Sweet Moments</span></h3>
                            <p className="text-lg md:text-xl text-white/50 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
                                Every crunch has a story. Tell us yours and become a part of our flavor legacy!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                                <button className="btn-primary px-10 md:px-16 py-4 md:py-6 text-lg md:text-xl rounded-full flex items-center justify-center gap-3">
                                    <FaHeart /> Write a Review
                                </button>
                                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 md:px-16 py-4 md:py-6 text-lg md:text-xl rounded-full transition-all">
                                    View Google Maps
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
