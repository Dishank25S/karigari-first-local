import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const Kalp: React.FC = () => {
  useEffect(() => {
    document.title = 'KALP | Karigari';
  }, []);

  const benefits = [
    "Comprehensive perception analysis across all senses",
    "Detailed benchmarking against industry standards",
    "Actionable recommendations for improvement",
    "Cross-functional workshops and knowledge transfer",
    "Ongoing support and implementation guidance"
  ];

  const services = [
    {
      title: "KALP Assessment",
      description: "Comprehensive evaluation of your product's current perceptual qualities across all senses."
    },
    {
      title: "KALP Workshops",
      description: "Interactive sessions to educate teams on perception science principles and applications."
    },
    {
      title: "KALP Strategy",
      description: "Long-term planning for embedding perception excellence throughout your design process."
    },
    {
      title: "KALP Implementation",
      description: "Hands-on assistance in applying KALP principles to specific products or services."
    },
    {
      title: "KALP Benchmarking",
      description: "Comparative analysis of your offerings against industry leaders through the lens of perception."
    },
    {
      title: "KALP Training",
      description: "Comprehensive educational programs to build internal perception design capabilities."
    }
  ];

  return (
    <div className="pt-24 bg-white text-[#171717]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-[#171717]">KALP</h1>
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8">
                Our premium design thinking framework that integrates perception science with traditional design methodologies to create deeply resonant product experiences.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Learn More About KALP
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                <img
                  src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="KALP Framework Visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#171717]">KALP Services</h2>
            <p className="max-w-2xl mx-auto text-[#4B5563]">
              Our KALP framework offers comprehensive services to enhance your product's perceptual quality.
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
                className="bg-white p-8 border border-[#E5E5E5] shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#171717]">{service.title}</h3>
                <p className="text-[#4B5563]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#171717]">Why Choose KALP?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black flex items-center justify-center mr-3 mt-0.5">
                      <Check size={14} className="text-white" />
                    </span>
                    <p className="text-[#4B5563]">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#F5F5F5] p-8 border border-[#E5E5E5]"
            >
              <blockquote className="text-xl font-serif italic text-[#4B5563] mb-6">
                "KALP transformed our approach to product design, helping us create experiences that truly resonate with our customers on a deeper level."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#E5E5E5] rounded-full mr-4" />
                <div>
                  <p className="font-medium text-[#171717]">Client Name</p>
                  <p className="text-sm text-[#4B5563]">Design Director, Leading Brand</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#171717]">Ready to Experience KALP?</h2>
              <p className="text-[#4B5563] mb-8">
                Contact us to learn how KALP can elevate your product experience and create deeper connections with your customers.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get Started with KALP
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Kalp;
