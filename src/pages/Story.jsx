import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHeart, FaAward, FaUsers, FaLeaf, FaWater, FaVial, FaQuoteLeft, FaUtensils } from 'react-icons/fa';

const Story = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const milestones = [
        { year: '1995', title: 'The First Stall', desc: 'Started with a single pushcart in the heart of Chandni Chowk with a secret family recipe.' },
        { year: '2005', title: 'Hygiene Revolution', desc: 'Introduced RO mineral water and gloves at a time when street food was synonymous with illness.' },
        { year: '2015', title: 'Citywide Renown', desc: 'Recognized as the "King of Crunches" by local food critics and expanded to 5 locations.' },
        { year: '2024', title: 'Digital Era', desc: 'Launching our premium dining experience and online ordering for our loyal customers.' }
    ];

    const values = [
        { icon: FaWater, title: 'Pure Water', desc: 'We only use 100% RO purified mineral water for our "Pani" and all preparations.', color: 'text-blue-500' },
        { icon: FaLeaf, title: 'Fresh Spices', desc: 'Our spices are hand-ground every morning to preserve the essential oils and aroma.', color: 'text-green-500' },
        { icon: FaVial, title: 'No Artificials', desc: 'Zero artificial colors or preservatives. The colors you see are nature\'s own.', color: 'text-red-500' },
        { icon: FaHeart, title: 'Made with Love', desc: 'Our staff are trained to serve every guest with the same warmth as family.', color: 'text-pink-500' }
    ];

    return (
        <div ref={containerRef} className="animate-fade-in bg-background overflow-hidden">
            {/* Cinematic Animated Hero */}
            <section className="relative h-[85vh] md:h-[100vh] flex items-end justify-center overflow-hidden bg-secondary">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-x-0 bottom-0 top-24 z-0"
                >
                    <motion.img
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1.15 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
                        alt="Cinematic Street Food"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
                </motion.div>

                {/* Animated Background Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 border border-primary/20 rounded-full border-dashed hidden sm:block"
                ></motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mb-24 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl mx-auto mb-6 md:mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)]"
                        >
                            <FaUtensils className="text-secondary text-2xl md:text-3xl" />
                        </motion.div>

                        <motion.h1
                            initial={{ letterSpacing: "0.5em", opacity: 0 }}
                            animate={{ letterSpacing: "0.1em", opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-4 md:mb-6 uppercase tracking-tighter"
                        >
                            Our <span className="text-primary italic relative">
                                Legacy
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="absolute -bottom-2 left-0 h-1 md:h-2 bg-primary/30"
                                ></motion.span>
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="h-1 bg-primary mx-auto mb-6 md:mb-10"
                        ></motion.div>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-xl md:text-2xl lg:text-4xl text-white font-display italic leading-tight"
                        >
                            "Where Tradition <span className="text-primary italic">Crunches</span> Time"
                        </motion.p>
                    </motion.div>
                </div>

                {/* Decorative Floating Circles */}
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-10 w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-full blur-2xl"
                ></motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                >
                    <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em]">Scroll Down</span>
                    <div className="w-px h-12 md:h-16 bg-gradient-to-b from-primary to-transparent"></div>
                </motion.div>
            </section>

            {/* The Origin - Split Layout */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
                        <div className="lg:w-1/2 relative w-full">
                            <motion.div
                                whileInView={{ x: 0, opacity: 1 }}
                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                                    <img
                                        src="https://b.zmtcdn.com/data/pictures/6/19295106/8fbf0b59a34748767bd336e4443b02e6_featured_v2.jpg"
                                        alt="Old Delhi Market"
                                        className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                {/* Float Card */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl z-20"
                                >
                                    <FaUtensils className="text-secondary text-2xl md:text-4xl mb-2 md:mb-4" />
                                    <p className="text-secondary font-display text-xl md:text-2xl leading-none font-bold">Original <br />Recipe</p>
                                    <p className="text-secondary/60 text-[10px] md:text-xs mt-2 font-black">SINCE 1995</p>
                                </motion.div>
                            </motion.div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 md:w-80 md:h-80 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] -z-10"></div>
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <motion.div
                                whileInView={{ x: 0, opacity: 1 }}
                                initial={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block">The Beginning</span>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-10 text-secondary leading-tight font-display">The Dust of <br /><span className="text-primary italic">Chandni Chowk</span></h2>
                                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-text-muted leading-relaxed">
                                    <p>
                                        In the narrow lanes of 1995 Old Delhi, Shri Om Prakash didn't just push a cart; he carried a legacy. While others focused on quantity, he obsessed over the "Dhara" — the perfect pour of spice-infused water.
                                    </p>
                                    <p>
                                        He discovered that the secret wasn't just the tamarind, but the temperature of the water and the vibration of the "Puri" as it shattered. This scientific approach to street food is what made <strong>Gol Gol Gappe</strong> a household name.
                                    </p>
                                    <div className="pt-6 md:pt-8 flex items-start gap-4 md:gap-6">
                                        <FaQuoteLeft className="text-primary text-3xl md:text-5xl opacity-20 flex-shrink-0" />
                                        <p className="text-xl md:text-2xl font-display text-secondary italic leading-tight">
                                            "We don't serve fast food. We serve a slow heritage that happens to be eaten quickly."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Modern Glass Grid */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-50"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-secondary/70 z-0"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 50, opacity: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl mb-16 md:mb-24 text-white font-display"
                    >
                        The Pillars of <span className="text-primary">Purity</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                whileInView={{ y: 0, opacity: 1 }}
                                initial={{ y: 50, opacity: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -15, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 group transition-all duration-500"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <v.icon />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary font-display">{v.title}</h4>
                                <p className="text-white/60 leading-relaxed text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline - Elegant Vertical Approach */}
            <section className="py-20 md:py-32 relative overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover grayscale"
                        alt="Heritage Background"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-secondary">The <span className="text-accent underline decoration-primary decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">Growth</span> Story</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20"></div>

                        <div className="space-y-16 md:space-y-24">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                        <div className={`space-y-2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left text-left'}`}>
                                            <span className="text-6xl md:text-8xl font-display text-secondary/10 block leading-none">{m.year}</span>
                                            <h4 className="text-2xl md:text-3xl font-bold text-secondary font-display">{m.title}</h4>
                                            <p className="text-text-muted text-sm md:text-lg max-w-md md:ml-auto md:mr-0">{m.desc}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 top-0 md:top-auto">
                                        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary border-4 border-white shadow-xl"></div>
                                    </div>
                                    {/* Filler for Desktop */}
                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section - Dark & Bold */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary rounded-[3rem] md:rounded-[5rem] p-10 md:p-32 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <img
                                src="https://images.unsplash.com/photo-1541140134513-85a161dc4a00?w=1600&auto=format&fit=crop&q=80"
                                className="w-full h-full object-cover"
                                alt="Global Background"
                            />
                        </div>
                        <div className="relative z-10">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-sm mb-6 md:mb-8 block">Global Aspirations</span>
                            <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-display mb-8 md:mb-12 leading-tight">Authenticity in <br /><span className="text-primary italic">Every Territory</span></h2>
                            <p className="text-base md:text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 font-light">
                                Today, Gol Gol Gappe is more than just a brand. It's a gold standard of Indian street food. We are now expanding overseas, carrying the same mineral water, the same spice heritage, and the same crunch to the global stage.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 border-t border-white/10 pt-10 md:pt-16">
                                <div>
                                    <span className="text-5xl md:text-6xl font-display text-primary block mb-1 md:mb-2">25+</span>
                                    <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-bold font-sans">Years of Trust</span>
                                </div>
                                <div>
                                    <span className="text-5xl md:text-6xl font-display text-primary block mb-1 md:mb-2">50k+</span>
                                    <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-bold font-sans">Daily Fans</span>
                                </div>
                                <div>
                                    <span className="text-5xl md:text-6xl font-display text-primary block mb-1 md:mb-2">100%</span>
                                    <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-bold font-sans">Pure Spices</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-20 md:pb-32">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block"
                    >
                        <h3 className="text-3xl md:text-4xl text-secondary font-display mb-8 md:mb-10">Ready to taste the legacy?</h3>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileActive={{ scale: 0.95 }}
                            className="btn-primary px-12 py-4 md:px-16 md:py-6 text-lg md:text-xl rounded-full shadow-2xl"
                        >
                            Visit Our Story Stall
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Story;
