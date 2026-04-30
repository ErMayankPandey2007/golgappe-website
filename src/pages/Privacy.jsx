import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 bg-secondary min-h-screen text-white">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display mb-8 text-primary">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Gol Gol Gappe. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products or services you have purchased from us.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process 
                and deliver your order, manage our relationship with you, and improve our website, products/services, marketing or customer relationships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees, 
                agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
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

export default Privacy;
