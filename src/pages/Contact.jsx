import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white animate-fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl text-secondary">Visit Our Stall</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    <div className="space-y-8 md:space-y-12">
                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center text-primary text-xl md:text-2xl flex-shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl text-secondary mb-1 md:mb-2 leading-tight">Location</h4>
                                <p className="text-text-muted text-sm md:text-lg">123 Food Street, Chandni Chowk,<br />Near Red Fort, Delhi - 110006</p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center text-accent text-xl md:text-2xl flex-shrink-0">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl text-secondary mb-1 md:mb-2 leading-tight">Phone</h4>
                                <p className="text-text-muted text-sm md:text-lg">+91 98765 43210</p>
                                <p className="text-text-muted text-sm md:text-lg">+91 11 2345 6789</p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center text-primary text-xl md:text-2xl flex-shrink-0">
                                <FaClock />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl text-secondary mb-1 md:mb-2 leading-tight">Opening Hours</h4>
                                <p className="text-text-muted text-sm md:text-lg font-bold">Mon - Fri: 12:00 PM - 10:00 PM</p>
                                <p className="text-text-muted text-sm md:text-lg font-bold">Sat - Sun: 11:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-premium">
                        <h4 className="text-2xl md:text-3xl text-secondary mb-6 md:mb-8">Send us a message</h4>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all text-sm" />
                            </div>
                            <div>
                                <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all text-sm" />
                            </div>
                            <div>
                                <label className="block text-secondary font-bold mb-1.5 md:mb-2 text-sm">Your Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-primary/10 outline-none focus:border-primary transition-all resize-none text-sm"></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full py-4 md:py-5 text-base md:text-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
