import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Story from './pages/Story';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Reservations from './pages/Reservations';
import Team from './pages/Team';
import Checkout from './pages/Checkout';
import Franchise from './pages/Franchise';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('gg_token');
    const userData = localStorage.getItem('gg_user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('gg_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gg_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('gg_token');
    localStorage.removeItem('gg_user');
    setUser(null);
    setCart([]);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i._id === item._id);
      if (existing) {
        return prev.map(i => i._id === item._id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev => prev.map(item => item._id === id ? { ...item, qty } : item));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        key={location.pathname + "-progress"}
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-1 bg-primary z-[150] shadow-[0_0_10px_rgba(245,158,11,0.5)]"
      />

      {!loading && (
        <>
          <Navbar user={user} cart={cart} onLogout={handleLogout} />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/story" element={<PageTransition><Story /></PageTransition>} />
                <Route path="/menu" element={<PageTransition><Menu user={user} addToCart={addToCart} /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                <Route path="/reviews" element={<PageTransition><Reviews /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/reservations" element={<PageTransition><Reservations /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/franchise" element={<PageTransition><Franchise /></PageTransition>} />
                <Route path="/checkout" element={<PageTransition><Checkout cart={cart} user={user} removeFromCart={removeFromCart} updateQty={updateQty} /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
