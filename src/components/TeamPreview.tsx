import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamPreview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-black text-white px-5 py-2 text-sm font-medium tracking-wider uppercase mb-8 shadow-md">
              FOUNDER'S NOTE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700" style={{fontFamily: 'FormaDJRVariable, FormaDJRText, FormaDJRDisplay, FormaDJRDeck, FormaDJRBanner, FormaDJRMicro, sans-serif'}}>From the lens of our founder</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight" style={{fontFamily: 'FormaDJRVariable, FormaDJRText, FormaDJRDisplay, FormaDJRDeck, FormaDJRBanner, FormaDJRMicro, sans-serif'}}>AMIT SHARMA</h2>
              <p className="text-lg text-gray-600 font-medium" style={{fontFamily: 'FormaDJRVariable, FormaDJRText, FormaDJRDisplay, FormaDJRDeck, FormaDJRBanner, FormaDJRMicro, sans-serif'}}>Founder & CEO</p>
            </div>

            <div className="relative py-8">
              <motion.blockquote 
                className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic max-w-3xl mx-auto relative bg-white border border-gray-300 shadow-md px-8 py-8 mx-auto w-full md:w-3/4 lg:w-2/3" // rectangular, sharp corners
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              >
                <span className="text-4xl text-black/15 absolute -top-4 -left-2 font-serif">"</span>
                What lies between a great idea and a great product - Craftsmanship.
                <span className="text-4xl text-black/15 absolute -bottom-4 -right-2 font-serif">"</span>
              </motion.blockquote>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-black text-white text-base font-semibold shadow-md hover:bg-gray-800 transition-all duration-500 ease-out hover:shadow-lg transform hover:scale-[1.02]"
            >
              Learn More About Our Story
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
