import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamMembers = [
    { id: 1, name: 'AMIT SHARMA', role: 'Founder & PQ Pioneer', quote: 'What lies between a great idea and a great product - Craftsmanship.' },
    { id: 2, name: 'SHIVAKKUMAR SMK', role: 'Design Quality Lead', quote: 'Designers have a duty not just to innovate for now, but to build for a future we may never see, but others will live in.' },
    { id: 3, name: 'RUTUJA BHIDE', role: 'Design & Business Strategist', quote: "Strategy isn't about endless possibilities; it's about the precise focus on the right problems, solved creatively to deliver maximum impact." },
    { id: 4, name: 'SUJAL AGRAWAL', role: 'Materiality & Sensory Quality Expert', quote: 'Design, to me, is the art of translating emotion into form where each detail builds a subtle, lasting relationship with the user.' },
    { id: 5, name: 'SHREYA JATHAVEDAN', role: 'User Researcher', quote: 'Design starts with empathy, but it grows with evidence.' },
    { id: 6, name: 'YASH NEWARE', role: 'Functional Experience Expert', quote: 'When form meets flawless function, perceived quality becomes a promise kept.' },
    { id: 7, name: 'SAIRAJ PANCHAL', role: 'Surface Appearance Expert', quote: 'Design and innovation aren’t just tools, they are my guiding principles, the twin engines that drive every masterpiece I create.' }
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
                I’m Amit, Founder of Karigari. After nearly two decades in the automotive industry, I reached a moment of clarity - a realization that design could be so much more than just a layer of polish. It could be a language. A feeling. A promise.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In over 18 years of working across global brands, one thing stood out - the most loved products weren’t just well-made, they were well-perceived. They felt right - in the hand, to the eye, and at an emotional level.              </p>
              <p className="text-gray-700 dark:text-gray-300">
                That difference came from the smallest details: the texture of a surface, the light on a curve, the harmony of form and function. And that’s where Karigari was born — a space where design is not decoration, but dialogue, where craftsmanship meets intent.
                Through our verticals Kalp (Creative Studio) and Kaaya (Immersive Tech Hub), we blend design, technology, and human insight — helping brands express quality in ways that connect and endure.
                Because in the end, it's not just what we make — it's how it makes people feel.              </p>
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
            { [
              {
                title: 'Foresight',
                text: [
                  'Designing a world where quality is not explained - it’s experienced.',
                  'We imagine a future where design goes beyond functionality - where perception, emotion, and craft combine to create products that resonate deeply and stand apart.'
                ]
              },
              {
                title: 'Drive',
                text: [
                  'Elevating how people experience products - by bridging creativity, technology, and human perception.',
                  'At Karigari, we design with intent, decode what users feel, and craft visual and tactile expressions that build trust, clarity, and delight.'
                ]
              },
              {
                title: 'Essence',
                text: [
                  'To champion the invisible — the emotional, sensory, and perceived layers of design that shape lasting impressions.',
                  'Karigari exists to give form to feelings — crafting the nuances that turn products into experiences and ideas into lasting impact.'
                ]
              }
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
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  {item.text.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-black dark:text-white">Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              The core values that drive our work and culture at Karigari.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { [
              {
                title: "Empathy, Always",
                description: "We design with people, not just for them. Every detail starts with understanding what matters to the ones who’ll use it."
              },
              {
                title: "Craft, Obsessed",
                description: "Precision isn’t polish - it’s philosophy. From surface finishes to UI glow, we obsess over what others overlook."
              },
              {
                title: "Process with Principles",
                description: "We don’t work in silos — we work in sync. Collaboration. Co-creation. Co-design. It’s how we make details speak."
              },
              {
                title: "Curious Creatures",
                description: "We question everything - because good design starts with good questions (and never ends with “that’s how it’s done”)."
              },
              {
                title: "Intent Over Noise",
                description: "We don’t design to impress. We design express - something useful, meaningful, and maybe even a little magical."
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white dark:bg-secondary-dark p-8 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl mb-4 text-black dark:text-white">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
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
