import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowRight,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Footer = () => (
    <footer className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                {/* Brand Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Logo" className="w-16 h-16 rounded-full border-2 border-primary shadow-lg shadow-primary/20" />
                        <span className="text-3xl font-display tracking-tight">Gol Gol <span className="text-primary">Gappe</span></span>
                    </div>
                    <p className="text-white/50 leading-relaxed italic">
                        "We aren't just serving street food; we're serving memories wrapped in a crunch. From Old Delhi to your heart, we bring hygiene and heritage together."
                    </p>
                    <div className="flex gap-4">
                        {[FaInstagram, FaFacebook, FaYoutube, FaTwitter].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary hover:-translate-y-2 transition-all duration-300 text-xl border border-white/5">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Navigate */}
                <div>
                    <h4 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest text-sm">Quick Navigate</h4>
                    <ul className="space-y-4">
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'Our Story', path: '/story' },
                            { label: 'Special Menu', path: '/menu' },
                            { label: 'The Team', path: '/team' },
                            { label: 'Gallery', path: '/gallery' },
                            { label: 'Franchise', path: '/franchise' }
                        ].map((link, idx) => (
                            <li key={idx}>
                                <Link to={link.path} className="text-white/60 hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all group">
                                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all"></span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest text-sm">Find Us</h4>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-white font-bold">Old Delhi Stall</p>
                                <p className="text-white/50 text-sm">123 Street Food Row, Chandni Chowk, Delhi - 110006</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="text-white font-bold">Direct Line</p>
                                <p className="text-white/50 text-sm">+91 98765 43210</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-white font-bold">Email Us</p>
                                <p className="text-white/50 text-sm">hello@golgolgappe.com</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                    <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-widest text-sm">Join the Crunch</h4>
                    <p className="text-white/40 text-sm mb-6 leading-relaxed">Get weekly updates on new menu items and special kitchen secrets!</p>
                    <form className="space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-secondary border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-primary transition-all text-sm"
                            />
                            <button className="absolute right-2 top-2 w-10 h-10 bg-primary text-secondary rounded-xl flex items-center justify-center hover:bg-white transition-all">
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-secondary" alt="User" />
                            ))}
                        </div>
                        <p className="text-xs text-white/40"><span className="text-white font-bold">500+</span> fans already joined</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/30 text-xs">
                    &copy; 2026 Gol Gol Gappe. All rights reserved. <br className="md:hidden" /> | <a href="https://digicoders.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">Team DigiCoders</a>
                </p>
                <div className="flex gap-8 text-xs text-white/30">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
