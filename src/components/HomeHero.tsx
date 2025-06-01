import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg"
          alt="Premium Design"
          className="object-cover w-full h-full img-zoom-effect"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-cyan-500 font-serif text-base md:text-lg lg:text-xl mb-4"
          >
            Premium Design Studio
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black mb-6 md:mb-8 font-serif leading-tight">
            Crafting Exceptional{' '}
            <span className="relative">
              Experiences
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
              ></motion.span>
            </span>{' '}
            Through Design
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#4B5563] mb-8 md:mb-12 max-w-2xl leading-relaxed">
            We create immersive design experiences that engage the senses and transform how people interact with brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/services"
              className="btn bg-black text-white hover:bg-cyan-600 border-none group w-full sm:w-auto justify-center"
            >
              Explore Our Services
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="btn border border-black text-black hover:bg-cyan-500 hover:text-white w-full sm:w-auto justify-center"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-10 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 border border-cyan-500 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-32 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 border border-cyan-500 rounded-full"
      ></motion.div>
    </section>
  );
};

export default HomeHero;
