import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExpandAlt, FaCameraRetro, FaInstagram } from 'react-icons/fa';

const Gallery = () => {
    const containerRef = useRef(null);
    const [filter, setFilter] = useState('All');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const categories = ['All', 'Food', 'Process', 'Ambiance', 'People'];

    const images = [
        { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80', title: 'Signature Gol Gappe', category: 'Food' },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCEIWUvQdDp_5cHUzq1M5uu8qtuaFS_teYg&s', title: 'Art of Spiced Water', category: 'Process' },
        { url: 'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?w=800&q=80', title: 'Street Soul', category: 'Ambiance' },
        { url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80', title: 'Creamy Dahi Puri', category: 'Food' },

        { url: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', title: 'The Evening Rush', category: 'People' },
        { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', title: 'Royal Raj Kachori', category: 'Food' },
        { url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80', title: 'Golden Pav Bhaji', category: 'Food' },
        { url: 'https://cdn.shopify.com/s/files/1/0758/6929/0779/files/Masala_Tea_-_Annams_Recipes_Shop_2_480x480.jpg?v=1732347934', title: 'Aromatic Masala Chai', category: 'Process' },
        { url: 'https://img.freepik.com/free-photo/high-angle-shot-fusion-food-with-sushi-seasonings-plate-wooden-surface_181624-42994.jpg?semt=ais_user_personalization&w=740&q=80', title: 'Classic Plating', category: 'Ambiance' },
        { url: 'https://rosannaetc.com/wp-content/uploads/2022/02/Quick-Plating-Techniques-For-Sauce-example-2.jpg', title: 'Classic Plating', category: 'Ambiance' },
        { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80', title: 'Fresh Garnish', category: 'Process' },
        { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', title: 'Crunchy Bites', category: 'Food' },
        { url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80', title: 'Happy Little Faces', category: 'People' },
        { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&auto=format&fit=crop&q=80', title: 'The Perfect Snap', category: 'Ambiance' },
        { url: 'https://i.ytimg.com/vi/OyUvlDbcXHg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC40-CBGf6x0JjWlv2tdAew7TnCdg', title: 'Modern Heritage', category: 'Ambiance' }
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div ref={containerRef} className="animate-fade-in bg-background overflow-hidden min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] mt-16 md:mt-20 flex items-center justify-center overflow-hidden bg-secondary">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1.15 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
                        alt="Gallery Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='mt-4 md:mt-6'
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-4 md:mb-6 uppercase tracking-tight">
                            The <span className="text-primary italic">Lens</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/70 font-display italic max-w-2xl mx-auto leading-relaxed">
                            "A visual journey through the heart of Chandni Chowk's crunchiest legacy."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Controls & Grid */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                {/* Filter Controls */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-black transition-all duration-300 tracking-widest uppercase ${filter === cat
                                ? 'bg-primary text-secondary shadow-xl scale-105 md:scale-110'
                                : 'bg-white text-secondary/40 hover:bg-primary/10 hover:text-secondary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-Style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                    {filteredImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-premium cursor-pointer"
                        >
                            <motion.img
                                src={img.url}
                                alt={img.title}
                                className="w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden flex flex-col justify-end p-6 md:p-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="bg-primary text-secondary px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-4 inline-block">
                                        {img.category}
                                    </span>
                                    <h4 className="text-white text-xl md:text-3xl font-display mb-2 md:mb-4">{img.title}</h4>
                                    <div className="flex items-center gap-4 text-white/60">
                                        <FaInstagram className="hover:text-primary transition-colors text-lg" />
                                        <FaExpandAlt className="hover:text-primary transition-colors ml-auto text-lg" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="pb-20 md:pb-32 container mx-auto px-6 text-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block p-0.5 md:p-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] md:rounded-[3rem]"
                >
                    <div className="bg-secondary px-8 md:px-12 py-5 md:py-8 rounded-[1.9rem] md:rounded-[2.8rem] flex items-center gap-4 md:gap-6">
                        <FaInstagram className="text-primary text-3xl md:text-4xl" />
                        <div className="text-left">
                            <p className="text-white font-bold leading-tight text-sm md:text-base">Tag us on Instagram</p>
                            <p className="text-white/40 text-xs md:text-sm">#GolGolGappeLegacy</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;
