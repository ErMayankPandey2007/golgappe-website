import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserFriends, FaClock, FaCheckCircle } from 'react-icons/fa';

const Reservations = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-background">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center bg-white p-12 rounded-[3rem] shadow-premium max-w-lg mx-6"
                >
                    <FaCheckCircle className="text-accent text-7xl mx-auto mb-6" />
                    <h2 className="text-4xl text-secondary mb-4">Table Reserved!</h2>
                    <p className="text-text-muted mb-8 text-lg">We've received your request. A confirmation email has been sent to your address. We can't wait to serve you!</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mx-auto">Make Another Reservation</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white animate-fade-in min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
                    <div className="flex-1 text-center lg:text-left">
                        <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block">Fine Dining Experience</span>
                        <h2 className="text-3xl md:text-5xl text-secondary mb-4 md:mb-8 leading-tight">Book a <span className="text-primary italic">Flavor Table</span></h2>
                        <p className="text-base md:text-lg text-text-muted mb-6 md:mb-8 leading-relaxed">
                            Skip the queue and enjoy our premium street food experience in a reserved setting. Perfect for family gatherings, office retreats, or a special date.
                        </p>

                        <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
                            <div className="flex items-center gap-3 md:gap-4 text-secondary">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-dark">
                                    <FaUserFriends />
                                </div>
                                <span className="text-base md:text-lg font-bold">Priority Seating & Service</span>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 text-secondary">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                                    <FaClock />
                                </div>
                                <span className="text-base md:text-lg font-bold">90-Minute Time Slot</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex-1 w-full bg-background p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-premium border border-primary/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Guest Name</label>
                                    <input required type="text" placeholder="Your Name" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all bg-white text-sm" />
                                </div>
                                <div>
                                    <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Number of Guests</label>
                                    <select className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all bg-white text-sm">
                                        <option>2 People</option>
                                        <option>4 People</option>
                                        <option>6+ People (Group)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Date</label>
                                    <div className="relative">
                                        <input required type="date" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all bg-white text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Time Slot</label>
                                    <select className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all bg-white text-sm">
                                        <option>12:00 PM</option>
                                        <option>02:00 PM</option>
                                        <option>06:00 PM</option>
                                        <option>08:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Special Requests</label>
                                <textarea rows="3" placeholder="Any allergies or celebrations?" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all bg-white resize-none text-sm"></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-4 md:py-5 text-base md:text-lg">Confirm Booking</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
