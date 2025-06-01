import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const Kaaya: React.FC = () => {
  useEffect(() => {
    document.title = 'KAAYA | Karigari';
  }, []);

  const services = [
    {
      title: "Perception Analysis",
      description: "In-depth evaluation of how your spaces are perceived through all senses."
    },
    {
      title: "Material Selection",
      description: "Expert guidance on materials that create the desired sensory experience."
    },
    {
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance spatial perception and mood."
    },
    {
      title: "Acoustic Treatment",
      description: "Optimizing sound environments to complement your space's purpose."
    },
    {
      title: "Olfactory Design",
      description: "Custom scent profiles that enhance brand recognition and visitor experience."
    },
    {
      title: "Tactile Elements",
      description: "Thoughtful integration of textures that invite touch and exploration."
    }
  ];

  const reasons = [
    {
      title: "Holistic Expertise",
      description: "Our team blends design science, psychology, and sensory strategy to transform spaces beyond aesthetics."
    },
    {
      title: "Brand-Centric Design",
      description: "We ensure every sensory detail reinforces your brand identity and narrative."
    },
    {
      title: "Data-Driven Outcomes",
      description: "We don’t just design—we measure, analyze, and refine to ensure perceptual and business goals are met."
    }
  ];

  return (
    <div className="pt-24 bg-white text-[#171717]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-[#171717]">KAAYA</h1>
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8">
                Our specialized spatial design service that crafts immersive environments through the scientific understanding of how spaces are perceived and experienced.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Explore KAAYA Services
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                <img
                  src="https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="KAAYA Design Concept"
                  className="w-full h-auto object-cover transform img-zoom-effect"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-[#171717]">KAAYA Services</h2>
            <p className="max-w-2xl mx-auto text-[#4B5563]">
              Our comprehensive approach to spatial design addresses all sensory dimensions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 border border-[#E5E5E5]"
              >
                <h3 className="text-xl mb-4 text-[#171717]">{service.title}</h3>
                <p className="text-[#4B5563]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KAAYA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-[#171717]">Why Choose KAAYA?</h2>
            <p className="max-w-2xl mx-auto text-[#4B5563]">
              Discover what sets KAAYA apart in crafting multisensory environments that captivate and convert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#F5F5F5] p-8 border border-[#E5E5E5]"
              >
                <h3 className="text-xl mb-4 text-[#171717]">{reason.title}</h3>
                <p className="text-[#4B5563]">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-[#171717]">Our Process</h2>
            <p className="max-w-2xl mx-auto text-[#4B5563]">
              KAAYA follows a structured approach to creating spaces that engage all senses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <ol className="relative border-l border-cyan-200 pl-8 space-y-12">
                {[
                  {
                    title: "Discovery",
                    description: "Understanding your brand, objectives, and the intended emotional response for your space."
                  },
                  {
                    title: "Analysis",
                    description: "Evaluating existing environments and identifying opportunities for sensory enhancement."
                  },
                  {
                    title: "Concept Development",
                    description: "Creating a multisensory design strategy tailored to your specific needs."
                  },
                  {
                    title: "Implementation",
                    description: "Bringing the design to life with meticulous attention to every sensory detail."
                  },
                  {
                    title: "Evaluation",
                    description: "Testing and refining the space to ensure it achieves the desired perceptual impact."
                  }
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full bg-cyan-200 flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <h3 className="text-xl mb-2 text-[#171717]">{step.title}</h3>
                    <p className="text-[#4B5563]">{step.description}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="KAAYA Design Process"
                  className="w-full h-auto object-cover transform img-zoom-effect"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-[#171717]">What Our Clients Say</h2>
            <p className="text-[#4B5563]">
              Hear from those who have experienced the transformative power of KAAYA.
            </p>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center italic text-[#4B5563]"
          >
            “KAAYA completely transformed our retail space. The attention to every sensory detail made our brand story come alive in ways we never imagined.”
            <br />— Neha Mehta, Brand Manager
          </motion.blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Kaaya;
