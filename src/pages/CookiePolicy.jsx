import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-secondary min-h-screen text-white">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display mb-8 text-primary">
            Cookie Policy
          </h1>
          <p className="text-white/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer, smartphone, or other devices when you visit our website. 
                They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. At Gol Gol Gappe, we use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li><strong>Essential Cookies:</strong> These are required for the operation of our website, such as keeping you logged in and securely managing your shopping cart.</li>
                <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website. This helps us improve the way our website works.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
                <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed to make our website more relevant to your interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p>
                In some special cases, we also use cookies provided by trusted third parties, such as Google Analytics, to help us understand how you use the site and ways that we can improve your experience. 
                These cookies may track things such as how long you spend on the site and the pages that you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Managing Your Cookies</h2>
              <p>
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. 
                However, this may prevent you from taking full advantage of the website and experiencing the complete ordering process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at: <br />
                <span className="text-primary mt-2 inline-block font-medium">hello@golgolgappe.com</span>
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default CookiePolicy;
