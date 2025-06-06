import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Design Lead', quote: 'Design is not just what it looks like and feels like. Design is how it works.' },
    { id: 2, name: 'Team Member 2', role: 'UX Designer', quote: 'Good design is obvious. Great design is transparent.' },
    { id: 3, name: 'Team Member 3', role: 'Brand Strategist', quote: 'Design creates culture. Culture shapes values. Values determine the future.' },
    { id: 4, name: 'Team Member 4', role: 'Creative Director', quote: 'Simplicity is the ultimate sophistication.' },
    { id: 5, name: 'Team Member 5', role: 'Visual Designer', quote: 'Design is thinking made visual.' },
    { id: 6, name: 'Team Member 6', role: 'Product Designer', quote: 'The best designs are the ones you don\'t notice.' },
    { id: 7, name: 'Team Member 7', role: 'Design Researcher', quote: 'Design is intelligence made visible.' },
    { id: 8, name: 'Team Member 8', role: 'Art Director', quote: 'Every great design begins with an even better story.' }
  ];  // One member per slide
  const totalSlides = teamMembers.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    document.title = 'About | Karigari';
  }, []);
  return (
    <div className="pt-16 bg-white dark:bg-primary-dark transition-colors duration-300">
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-black dark:text-white">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2018, Karigari was born from a vision to bridge the gap between technical design excellence and human emotional response. We recognized that truly exceptional design speaks to people on a deeper, often subconscious level.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our name, "Karigari," derives from the Hindi word for "craftsmanship," reflecting our commitment to meticulous attention to detail and the artisanal quality we bring to every project.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we work with discerning brands across industries who share our passion for design that resonates on a deeper level, creating experiences that form lasting connections with their audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Karigari team at work"
                  className="w-full h-auto object-cover shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-black dark:text-white">Our Foundation</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Guiding principles that inform our approach to every project and partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Mission', text: 'To transform how people experience design by creating solutions that engage all senses and elevate perception, bringing meaningful value to our clients and their audiences.' },
              { title: 'Vision', text: 'To be the global leader in perception-driven design, setting new standards for how brands connect with people through thoughtful, sensory-rich experiences.' },
              {
                title: 'Values',
                text: ['Craftsmanship in every detail', 'Human-centered approach', 'Continuous innovation', 'Integrity and transparency', 'Collaborative excellence'],
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white dark:bg-secondary-dark p-8 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl mb-4 text-black dark:text-white">{item.title}</h3>
                {Array.isArray(item.text) ? (
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    {item.text.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-black dark:text-white">Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Meet the talented individuals who bring their passion, expertise, and diverse perspectives to every project.
            </p>
          </motion.div>          {/* Team Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative bg-white dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden max-w-md w-full"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={`https://images.pexels.com/photos/${1000000 + teamMembers[currentSlide].id * 10}/pexels-photo-${1000000 + teamMembers[currentSlide].id * 10}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2`}
                        alt={teamMembers[currentSlide].name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-white text-lg mb-1">{teamMembers[currentSlide].name}</h3>
                        <p className="text-gray-300 mb-2">{teamMembers[currentSlide].role}</p>
                        <p className="text-gray-100 text-sm italic">
                          "{teamMembers[currentSlide].quote}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;
