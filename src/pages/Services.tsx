import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Perception Design Consultancy",
    description: "Our flagship service helps brands understand and optimize how their products are perceived through all senses. We evaluate existing products or concepts and provide strategic recommendations to enhance perceived quality.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/perception-design"
  },
  {
    id: 2,
    title: "Perceived Quality Process Setup",
    description: "We help organizations establish robust internal processes for evaluating and ensuring perceived quality throughout product development cycles, from concept to market.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/quality-process"
  },
  {
    id: 3,
    title: "Premiumization Value Mapping",
    description: "Our specialized benchmarking helps brands understand competitive landscapes through the lens of perception, identifying opportunities to elevate products to premium status.",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/premiumization"
  },
  {
    id: 4,
    title: "Automation Tools for Craftsmanship",
    description: "We develop custom tools and frameworks to help teams systematically evaluate and improve the craftsmanship and perceived quality of their products.",
    image: "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/automation-tools"
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | Karigari';
  }, []);

  return (
    <div className="pt-16 bg-white text-[#171717]">
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } bg-white p-8 border border-[#E5E5E5]`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl mb-6 text-[#171717]">{service.title}</h2>
                  <p className="text-[#4B5563] mb-8">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-gold hover:text-gold-dark transition-colors group"
                  >
                    
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover img-zoom-effect"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-[#171717]">Ready to Elevate Your Brand?</h2>
              <p className="text-[#4B5563] mb-8">
                Contact us to discuss how our perception design services can transform your product experience and strengthen your brand's connection with customers.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Services;