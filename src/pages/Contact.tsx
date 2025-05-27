import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Karigari';
  }, []);

  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Let's discuss how we can help elevate your brand through exceptional design experiences.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Contact;