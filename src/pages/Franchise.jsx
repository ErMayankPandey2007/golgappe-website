import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaHandshake, FaChartLine, FaCheckCircle, FaBuilding } from 'react-icons/fa';

const Franchise = () => {
    const [submitted, setSubmitted] = useState(false);

    const perks = [
        { icon: FaStore, title: 'Proven Model', desc: 'Our established business model ensures high profitability from day one.' },
        { icon: FaHandshake, title: 'Full Support', desc: 'From training to supplies, we support you at every single step.' },
        { icon: FaChartLine, title: 'Brand Power', desc: 'Leverage the most loved street food brand in the country.' },
        { icon: FaBuilding, title: 'Site Selection', desc: 'We help you find the most high-traffic locations for your stall.' }
    ];

    if (submitted) {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-background">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center bg-white p-12 rounded-[3rem] shadow-premium max-w-lg mx-6"
                >
                    <FaCheckCircle className="text-accent text-7xl mx-auto mb-6" />
                    <h2 className="text-4xl text-secondary mb-4">Application Sent!</h2>
                    <p className="text-text-muted mb-8 text-lg">Our business team will contact you within 48 hours to discuss this exciting opportunity.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mx-auto">Apply Again</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-16 md:pt-32 animate-fade-in">
            {/* Hero */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80" className="w-full h-full object-cover" alt="Shop" />
                    <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-display mb-4">Grow With <span className="text-primary italic">Us</span></h1>
                    <p className="text-base md:text-xl text-white/60">Take the legacy of Gol Gol Gappe to your city.</p>
                </div>
            </section>

            {/* Perks Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {perks.map((perk, i) => (
                            <div key={i} className="text-center p-8 rounded-[2rem] md:rounded-3xl bg-background border border-primary/5 hover:border-primary/20 transition-all">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center text-primary text-2xl md:text-3xl mb-4 md:mb-6 mx-auto">
                                    <perk.icon />
                                </div>
                                <h4 className="text-lg md:text-xl font-bold mb-2 text-secondary">{perk.title}</h4>
                                <p className="text-text-muted text-sm">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-premium overflow-hidden flex flex-col md:flex-row">
                        <div className="flex-1 bg-secondary p-8 md:p-12 text-white">
                            <h3 className="text-3xl md:text-4xl mb-6">Partner With Us</h3>
                            <p className="text-white/60 mb-8 text-sm md:text-base">Fill out the form and our franchise managers will reach out to you with all details.</p>
                            <ul className="space-y-4 text-sm md:text-base">
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-primary" />
                                    <span>Verified Profit Margins</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-primary" />
                                    <span>Centralized Supply Chain</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-primary" />
                                    <span>Marketing & Launch Support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 p-8 md:p-12">
                            <form onSubmit={() => setSubmitted(true)} className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                                    <input required className="w-full border-b border-zinc-200 py-2 outline-none focus:border-primary transition-all text-sm" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email</label>
                                    <input type="email" required className="w-full border-b border-zinc-200 py-2 outline-none focus:border-primary transition-all text-sm" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">City of Interest</label>
                                    <input required className="w-full border-b border-zinc-200 py-2 outline-none focus:border-primary transition-all text-sm" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Your Message</label>
                                    <textarea rows="3" className="w-full border-b border-zinc-200 py-2 outline-none focus:border-primary transition-all resize-none text-sm"></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full mt-6 py-4 text-sm">Send Application</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Franchise;
