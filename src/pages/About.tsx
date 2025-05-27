import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About | Karigari';
  }, []);

  return (
    <div className="pt-24 bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-secondary-light dark:bg-secondary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-primary-light dark:text-primary-dark">Our Story</h2>
              <p className="text-secondary-light dark:text-secondary-dark mb-6">
                Founded in 2018, Karigari was born from a vision to bridge the gap between technical design excellence and human emotional response. We recognized that truly exceptional design speaks to people on a deeper, often subconscious level.
              </p>
              <p className="text-secondary-light dark:text-secondary-dark mb-6">
                Our name, "Karigari," derives from the Hindi word for "craftsmanship," reflecting our commitment to meticulous attention to detail and the artisanal quality we bring to every project.
              </p>
              <p className="text-secondary-light dark:text-secondary-dark">
                Today, we work with discerning brands across industries who share our passion for design that resonates on a deeper level, creating experiences that form lasting connections with their audiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Karigari team at work" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover border border-divider-light dark:border-divider-dark img-zoom-effect"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg w-24 h-24 flex items-center justify-center">
                  <span className="text-primary-light dark:text-primary-dark text-lg font-serif">Since 2018</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-16 md:py-24 bg-primary-dark dark:bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-primary-light dark:text-primary-dark">Our Foundation</h2>
            <p className="max-w-2xl mx-auto text-secondary-light dark:text-secondary-dark">
              Guiding principles that inform our approach to every project and partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary-light dark:bg-secondary-dark p-8 border border-divider-light dark:border-divider-dark"
            >
              <h3 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Mission</h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                To transform how people experience design by creating solutions that engage all senses and elevate perception, bringing meaningful value to our clients and their audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-secondary-light dark:bg-secondary-dark p-8 border border-divider-light dark:border-divider-dark"
            >
              <h3 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Vision</h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                To be the global leader in perception-driven design, setting new standards for how brands connect with people through thoughtful, sensory-rich experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-secondary-light dark:bg-secondary-dark p-8 border border-divider-light dark:border-divider-dark"
            >
              <h3 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Values</h3>
              <ul className="text-secondary-light dark:text-secondary-dark space-y-2">
                <li>• Craftsmanship in every detail</li>
                <li>• Human-centered approach</li>
                <li>• Continuous innovation</li>
                <li>• Integrity and transparency</li>
                <li>• Collaborative excellence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary-light dark:bg-secondary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-primary-light dark:text-primary-dark">Our Team</h2>
            <p className="max-w-2xl mx-auto text-secondary-light dark:text-secondary-dark">
              Meet the talented individuals who bring their passion, expertise, and diverse perspectives to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-primary-light dark:bg-primary-dark border border-divider-light dark:border-divider-dark"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${1000000 + item * 10}/pexels-photo-${1000000 + item * 10}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2`}
                    alt="Team member"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 img-zoom-effect"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-primary-light dark:text-primary-dark text-lg mb-1">Team Member {item}</h3>
                    <p className="text-gold mb-2">Design Role</p>
                    <p className="text-secondary-light dark:text-secondary-dark text-sm">
                      "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;