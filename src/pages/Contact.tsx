import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Karigari';
  }, []);

  return (
    <div className="pt-24">
      <section className="">
        <div className="container-custom">
          
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Contact;