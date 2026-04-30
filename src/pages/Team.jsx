import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaUtensils, FaUserTie, FaAward } from 'react-icons/fa';

const Team = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const team = [
        {
            name: "Shri Om Prakash",
            role: "Founder & Visionary",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
            bio: "The man who started it all in 1995. His dedication to purity is the foundation of our legacy.",
            icon: FaUserTie
        },
        {
            name: "Chef Rajveer Singh",
            role: "Executive Head Chef",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx9f9Yf_C6oibLGdbjvk5K8wu3-E_Ydes6Q&s",
            bio: "Guardian of the secret spice blend. Rajveer ensures every 'Puri' meets our golden standards.",
            icon: FaAward
        },
        {
            name: "Meera Iyer",
            role: "Operations Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
            bio: "Bringing modern management to traditional street food, Meera leads our global expansion.",
            icon: FaUserTie
        },
        {
            name: "Arjun Kapoor",
            role: "Innovation Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
            bio: "Merging global culinary techniques with Indian street staples to create the 'Fusion Crunch'.",
            icon: FaAward
        }
    ];

    return (
        <div ref={containerRef} className="animate-fade-in bg-background overflow-hidden min-h-screen">
            {/* Cinematic Hero */}
            <section className="relative h-[65vh] md:h-[80vh] mt-16 md:mt-20 flex items-center justify-center overflow-hidden bg-secondary">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1.05 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
                        alt="Team Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-sm mb-4 md:mb-6 block">The Soul of Gol Gol Gappe</span>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-4 md:mb-6 uppercase tracking-tight">
                            The <span className="text-primary italic">Creators</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/70 font-display italic max-w-2xl mx-auto leading-relaxed">
                            "The hands that carry the heritage, the hearts that craft the crunch."
                        </p>
                    </motion.div>
                </div>

                {/* Decorative floating lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </section>

            {/* Team Grid */}
            <section className="py-20 md:py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative mb-8 md:mb-10">
                                {/* Photo Container */}
                                <div className="relative h-[400px] md:h-[500px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 group-hover:-translate-y-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12 gap-6 text-white text-2xl">
                                        <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
                                    </div>
                                </div>
                                {/* Background Decorative Circle */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                            </div>

                            <div className="text-center">
                                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <member.icon />
                                </span>
                                <h3 className="text-2xl md:text-3xl font-display text-secondary mb-1 md:mb-2">{member.name}</h3>
                                <p className="text-primary font-black uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6">{member.role}</p>
                                <div className="w-8 h-0.5 bg-primary/20 mx-auto mb-4 md:mb-6 group-hover:w-16 transition-all"></div>
                                <p className="text-text-muted italic leading-relaxed px-4 text-sm md:text-lg">"{member.bio}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Join the Team CTA */}
            <section className="pb-20 md:pb-32 container mx-auto px-6">
                <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.95, opacity: 0 }}
                    className="bg-secondary rounded-[3rem] md:rounded-[5rem] p-10 md:p-32 text-center relative overflow-hidden shadow-premium"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-display text-white mb-6 md:mb-10 leading-tight">Become a Part of <br /><span className="text-primary italic">The Legacy</span></h2>
                        <p className="text-base md:text-xl text-white/50 mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed">
                            We're always looking for passionate chefs, energetic servers, and visionaries to help us spread the crunch worldwide.
                        </p>
                        <button className="btn-primary px-10 md:px-16 py-4 md:py-6 text-lg md:text-xl rounded-full">Explore Careers</button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Team;
