import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUtensils, FaLeaf, FaClock, FaStar, FaInstagram, FaQuoteRight, FaFire, FaSmile, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OfferSlider from '../components/OfferSlider';

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-premium border border-primary/10"
    >
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark text-3xl mb-6">
            <Icon />
        </div>
        <h3 className="text-2xl mb-4 text-secondary font-display">{title}</h3>
        <p className="text-text-muted leading-relaxed">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="animate-fade-in bg-background">
            {/* Premium Cinematic Hero */}
            <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-secondary pt-24 md:pt-20 pb-16 md:pb-20">
                <div className="absolute inset-x-0 bottom-0 top-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <span className="inline-block py-2 px-4 md:px-6 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-8 shadow-2xl backdrop-blur-md">
                                #1 Authentic Street Food Legacy
                            </span>

                            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display text-white leading-[1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10">
                                The Master <br />
                                <span className="text-primary italic">Crunch</span>
                            </h1>

                            <div className="flex items-center gap-6 md:gap-10 mb-10 md:mb-16">
                                <div className="w-12 md:w-20 h-0.5 bg-primary/50"></div>
                                <p className="text-lg md:text-2xl text-white/60 font-display italic max-w-sm md:max-w-md">
                                    "A symphony of spices, a burst of tradition, a legacy in every bite."
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
                                <Link to="/menu" className="btn-primary w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 text-lg md:text-xl rounded-full shadow-[0_20px_50px_rgba(245,158,11,0.2)] justify-center">
                                    Taste the Menu
                                </Link>
                                <Link to="/story" className="group flex items-center gap-4 text-white font-bold text-base md:text-lg hover:text-primary transition-colors">
                                    <span className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                    </span>
                                    Our Legacy
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-40 md:h-60 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
            </section>

            {/* Offer Slider Section */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-6">
                    <OfferSlider />
                </div>
            </section>

            {/* Core Values Section (Features) */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-7xl font-display text-secondary mb-4 md:mb-8 leading-tight">Crafted with <span className="text-primary italic">Purity</span></h2>
                        <div className="w-16 md:w-24 h-1 bg-primary/20 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <FeatureCard
                            icon={FaUtensils}
                            title="Royal Hygiene"
                            desc="We use only RO mineral water and medical-grade standards for our signature spiced water."
                        />
                        <FeatureCard
                            icon={FaLeaf}
                            title="Zero Additives"
                            desc="No synthetic colors or chemicals. Just hand-pounded spices and farm-fresh ingredients."
                        />
                        <FeatureCard
                            icon={FaClock}
                            title="Live Preparation"
                            desc="Your order is assembled the moment you ask for it, ensuring maximum crunch and freshness."
                        />
                    </div>
                </div>
            </section>

            {/* Menu Highlights Section */}
            <section className="py-20 md:py-32 bg-secondary/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-20">
                        <div>
                            <span className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block">Recommended for you</span>
                            <h2 className="text-4xl md:text-7xl font-display text-secondary leading-tight">The <span className="text-primary italic">Signature</span> Hits</h2>
                        </div>
                        <Link to="/menu" className="btn-primary rounded-full px-8 py-4 md:px-10 md:py-5 w-fit">View All Specialties</Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {[
                            { name: "Classic Pani Puri", basePrice: 60, discountPrice: 45, desc: "Spiced tamarind water in gold-standard crunch.", image: "https://media.istockphoto.com/id/2162493302/photo/exploring-the-tangy-spicy-and-refreshing-delight-of-pani-puri-indias-favourite-street-food.jpg?s=612x612&w=0&k=20&c=a4_z86B2TwR29HCX1bgWS9IgXwtFCtoQNJonL4pCM1U=" },
                            { name: "Dahi Poori", basePrice: 80, discountPrice: 60, desc: "Creamy yogurt and tangy chutneys explosion.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" },
                            { name: "Raj Kachori", basePrice: 120, discountPrice: 90, desc: "The king of Kachoris with royal toppings.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium group"
                            >
                                <div className="h-48 md:h-64 overflow-hidden relative">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                                        {item.discountPrice ? (
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs text-zinc-400 line-through">₹{item.basePrice}</span>
                                                <span className="font-black text-secondary text-xs">₹{item.discountPrice}</span>
                                            </div>
                                        ) : (
                                            <span className="font-black text-secondary text-xs md:text-sm">₹{item.basePrice}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 md:p-10">
                                    <h3 className="text-xl md:text-2xl font-display text-secondary mb-2 md:mb-3">{item.name}</h3>
                                    <p className="text-text-muted mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">{item.desc}</p>
                                    <div className="flex items-center gap-1 text-primary text-xs md:text-sm">
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Heritage Highlight (From Story Page) */}
            <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] sm:h-[450px] md:h-[600px]"
                    >
                        <div className="h-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-10 border-4 md:border-8 border-white/5">
                            <img src="https://sugarspunrun.com/wp-content/uploads/2024/12/Vegetable-soup-recipe-2-of-2.jpg" className="w-full h-full object-cover" alt="Heritage" />
                        </div>
                        <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-primary rounded-full blur-[40px] md:blur-[60px] opacity-20"></div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-accent rounded-full blur-[40px] md:blur-[60px] opacity-20"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <span className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-4 md:mb-6 block">Our Secret Sauce</span>
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-display text-white mb-6 md:mb-10 leading-tight">A Legacy of <br /><span className="text-primary italic">25 Golden Years</span></h2>
                        <p className="text-base md:text-xl text-white/50 mb-8 md:mb-12 leading-relaxed italic">
                            "What started as a small stall in the heart of the city has now become the gold standard of ethnic street food. We don't just sell snacks; we preserve memories."
                        </p>
                        <Link to="/story" className="btn-primary px-8 py-4 md:px-12 md:py-5 rounded-full inline-flex items-center gap-3 md:gap-4 text-sm md:text-base">
                            Read Our Story <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-20 md:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block">Visual Gastronomy</span>
                        <h2 className="text-4xl md:text-7xl font-display text-secondary mb-8 md:mb-12 leading-tight">Capture the <span className="text-primary italic">Crunch</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-20">
                        {[
                            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
                            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
                            "https://holycowvegan.net/wp-content/uploads/2019/04/idli-recipe-1-2.jpg",
                            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80"
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.95 }}
                                className="h-56 md:h-80 rounded-[2rem] overflow-hidden shadow-lg border-2 border-primary/5"
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to="/gallery" className="btn-primary rounded-full px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl">Enter Full Gallery</Link>
                    </div>
                </div>
            </section>

            {/* Team Showcase (From Team Page) */}
            <section className="py-20 md:py-32 bg-secondary/5 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-7xl font-display text-secondary mb-4 md:mb-8 leading-tight">The <span className="text-primary italic">Creators</span></h2>
                        <div className="w-16 md:w-24 h-1 bg-primary/20 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
                        {[
                            { name: "Shri Om Prakash", role: "Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
                            { name: "Chef Rajveer", role: "Head Chef", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx9f9Yf_C6oibLGdbjvk5K8wu3-E_Ydes6Q&s" },
                            { name: "Meera Iyer", role: "Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
                            { name: "Arjun Kapoor", role: "Chef", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="text-center group"
                            >
                                <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-4 md:mb-6 border-2 border-primary/5 group-hover:border-primary transition-all shadow-xl">
                                    <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                                </div>
                                <h3 className="text-lg md:text-2xl font-display text-secondary leading-tight">{member.name}</h3>
                                <p className="text-primary font-black uppercase text-[8px] md:text-[10px] tracking-widest">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to="/team" className="group flex items-center gap-3 md:gap-4 text-secondary font-display text-xl md:text-2xl hover:text-primary transition-colors text-center">
                            Meet the Entire Family <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials (From Reviews Page) */}
            <section className="py-20 md:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block">Wall of Fame</span>
                        <h2 className="text-4xl md:text-7xl font-display text-secondary leading-tight">The <span className="text-primary italic">Reviews</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
                        {[
                            { name: "Rahul Sharma", text: "The most hygienic Gol Gappe I've ever had! The water is magical.", img: "https://i.pravatar.cc/150?u=rahul" },
                            { name: "Priya Gupta", text: "Dahi Puri is a must-try. The balance of sweet and spicy is pure art.", img: "https://i.pravatar.cc/150?u=priya" },
                            { name: "Vikram Singh", text: "Consistent taste and amazing service. I'm a regular here!", img: "https://i.pravatar.cc/150?u=vikram" }
                        ].map((review, i) => (
                            <div key={i} className="bg-secondary/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative group border border-transparent hover:border-primary/20 transition-all">
                                <FaQuoteRight className="absolute top-6 right-6 md:top-10 md:right-10 text-primary/10 text-4xl md:text-6xl" />
                                <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                                    <img src={review.img} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-primary" alt={review.name} />
                                    <h4 className="text-lg md:text-xl font-display text-secondary">{review.name}</h4>
                                </div>
                                <p className="text-sm md:text-lg italic text-text-muted leading-relaxed">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to="/reviews" className="btn-primary rounded-full px-12 py-4 md:px-16 md:py-6 text-lg md:text-xl shadow-xl">Read More Love</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
