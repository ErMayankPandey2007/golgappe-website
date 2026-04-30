import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Navbar = ({ user, onLogout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/story', label: 'Story' },
        { path: '/menu', label: 'Menu' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/team', label: 'Team' },
        { path: '/reviews', label: 'Reviews' },
        { path: '/franchise', label: 'Franchise' },
        { path: '/contact', label: 'Visit' },
    ];

    const isTransparent = !isScrolled && location.pathname === '/' && !isOpen;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' || isOpen ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 relative z-50">
                    <img src={logo} alt="Gol Gol Gappe Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary" />
                    <span className={`text-xl md:text-2xl font-display transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-secondary'}`}>Gol Gol Gappe</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `nav-link transition-colors duration-500 ${isActive ? 'text-primary after:w-full' : (isTransparent ? 'text-white/90 hover:text-white' : 'text-secondary')} ${isTransparent ? 'after:bg-white' : 'after:bg-primary'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link to="/checkout" className="hidden sm:flex items-center gap-2 btn-primary px-4 py-2 text-sm relative">
                                <FaShoppingCart /> Cart
                            </Link>
                            <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10">
                                <FaUser className="text-primary" />
                                <span className="text-sm font-bold text-secondary">{user.name}</span>
                            </div>
                            <button onClick={onLogout} className="hidden sm:inline-block text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-widest">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="hidden sm:inline-block btn-primary px-6 py-2 text-sm">Login</Link>
                    )}
                    <Link to="/reservations" className="hidden sm:inline-block btn-primary px-6 py-2 text-sm">Book Table</Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-xl transition-all duration-300 relative z-50 ${isTransparent ? 'text-white' : 'text-secondary'} hover:bg-primary/10`}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden glass border-t border-primary/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link.path}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-2xl font-display transition-all duration-300 block py-2 ${isActive ? 'text-primary pl-4 border-l-4 border-primary' : 'text-secondary hover:text-primary'}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            {user && (
                                <>
                                    <Link to="/checkout" className="btn-primary mt-4 py-4 text-center text-xl rounded-2xl w-full flex items-center justify-center gap-2">
                                        <FaShoppingCart /> Cart
                                    </Link>
                                    <Link to="/my-orders" className="btn-primary mt-2 py-4 text-center text-xl rounded-2xl w-full">
                                        My Orders
                                    </Link>
                                    <button onClick={onLogout} className="mt-2 w-full py-4 text-center text-xl font-bold text-red-500 hover:text-red-700 uppercase tracking-widest">
                                        Logout
                                    </button>
                                </>
                            )}
                            {!user && (
                                <Link to="/login" className="btn-primary mt-4 py-4 text-center text-xl rounded-2xl w-full">
                                    Login
                                </Link>
                            )}
                            <Link to="/reservations" className="btn-primary mt-2 py-4 text-center text-xl rounded-2xl w-full">
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
