import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 bg-secondary min-h-screen text-white">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display mb-8 text-primary">
            Terms & Conditions
          </h1>
          <p className="text-white/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Gol Gol Gappe website, you accept and agree to be bound by the terms and provision of this agreement. 
                In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Information</h2>
              <p>
                All menu items, descriptions, and prices are subject to change without prior notice. 
                While we strive to ensure that all details, descriptions, and prices appearing on this website are accurate, errors may occur. 
                If we discover an error in the price of any goods which you have ordered, we will inform you of this as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Ordering and Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Orders can be placed online through our website.</li>
                <li>We reserve the right to refuse or cancel any order for any reason at any given time.</li>
                <li>Payments must be made in full at checkout. We accept major credit/debit cards and supported digital wallets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Food Allergies</h2>
              <p>
                While we take every precaution to prevent cross-contamination, our kitchen handles ingredients containing allergens (such as dairy, nuts, and gluten). 
                If you have a severe allergy, please inform us before placing your order. We cannot guarantee that any item is 100% free of allergens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                The site and its original content, features, and functionality are owned by Gol Gol Gappe and are protected by international copyright, 
                trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <p>
                If you have any questions regarding these Terms & Conditions, please reach out to our support team at: <br />
                <span className="text-primary mt-2 inline-block font-medium">hello@golgolgappe.com</span>
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-60 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default Terms;
