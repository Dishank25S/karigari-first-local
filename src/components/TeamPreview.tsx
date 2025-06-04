import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamPreview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-left mb-8"
          >
            <div className="inline-block bg-black text-white px-4 py-2 text-sm font-medium tracking-wider uppercase mb-8">
              FOUNDER'S NOTE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">From the lens of our founder</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">AMIT SHARMA</h2>
              <p className="text-gray-600 mb-6">Founder & CEO</p>
              <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                "What lies between a great idea and a great product - Craftsmanship."
              </blockquote>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At Karigari, we believe that exceptional design emerges from the intersection of vision and meticulous execution. 
                Our journey began with a simple yet profound understanding: the gap between conception and creation is bridged by craftsmanship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every project we undertake is a testament to our commitment to transform ideas into experiences that resonate, 
                inspire, and endure. We don't just design; we craft the future of human interaction with thoughtful precision.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md shadow hover:bg-gray-800 transition"
            >
              Learn More About Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
