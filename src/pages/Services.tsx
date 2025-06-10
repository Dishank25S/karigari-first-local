import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

interface Service {
  id: number;
  title: string;
  description: string | React.ReactNode;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Perception Design Consultancy",
    description: (
      <>
        An expert-led design advisory that helps you identify and shape the intangible attributes that make a product feel refined, intuitive, and desirable.<br />
        <span className="font-semibold block mt-4 mb-1">What we do:</span>
        <ul className="list-disc list-inside mb-2 text-[#4B5563]">
          <li>Perception audits of existing products</li>
          <li>User impression studies and persona-based evaluations</li>
          <li>Refinement of surface quality, highlights, part junctions, proportions</li>
          <li>Design language development aligned with sensory cues</li>
        </ul>
        <span className="font-semibold block mt-2 mb-1">Critical For:</span>
        <span className="text-[#4B5563]">Automotive, Consumer Electronics, Appliances / White Goods, Furniture & Lifestyle</span>
      </>
    ),
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/perception-design"
  },
  {
    id: 2,
    title: "Perceived Quality Process Setup",
    description: (
      <>
        A structured integration of Perceived Quality into your existing product development workflow — across teams, timelines, and tools.<br />
        <span className="font-semibold block mt-4 mb-1">What we do:</span>
        <ul className="list-disc list-inside mb-2 text-[#4B5563]">
          <li>Assess current design and development workflows</li>
          <li>Identify gaps in perceptual decision-making</li>
          <li>Create PQ checkpoints across design stages (concept, CAD, Class A, prototype)</li>
          <li>Develop internal playbooks, guidelines, and perceptual KPIs</li>
          <li>Train cross-functional teams to evaluate and act on PQ parameters</li>
        </ul>
        <span className="font-semibold block mt-2 mb-1">Critical For:</span>
        <span className="text-[#4B5563]">OEMs & Tier 1 Suppliers in Automotive, Aerospace, and Industrial Design, Consumer Durables and Home Appliances, Medical Devices</span>
      </>
    ),
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/quality-process"
  },
  {
    id: 3,
    title: "Premiumization Value Mapping & Benchmarking",
    description: (
      <>
        A research and strategy service that helps you define what “premium” really means to your users — and how your product can deliver it.<br />
        <span className="font-semibold block mt-4 mb-1">What we do:</span>
        <ul className="list-disc list-inside mb-2 text-[#4B5563]">
          <li>Conduct competitor and segment benchmarking</li>
          <li>Map perception triggers: visual cues, tactile & sensory feedback</li>
          <li>Identify perceptual gaps in your current product lineup</li>
          <li>Define cost-effective design upgrades that create maximum perceived value</li>
          <li>Help position product upgrades with stronger emotional and functional impact</li>
        </ul>
        <span className="font-semibold block mt-2 mb-1">Critical For:</span>
        <span className="text-[#4B5563]">EV Startups & Mobility Brands, Appliance & Home Brands, Luxury Product Makers, Mid-range Product Lines</span>
      </>
    ),
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services/premiumization"
  },
  {
    id: 4,
    title: "Automation Tools for Craftsmanship",
    description: (
      <>
        We create AI-assisted, tech supported, semi-automated tools to assess visual and tactile quality - objectively and consistently.<br />
        <span className="font-semibold block mt-4 mb-1">What we do:</span>
        <ul className="list-disc list-inside mb-2 text-[#4B5563]">
          <li>Define critical PQ parameters (gap, flush, symmetry, texture uniformity)</li>
          <li>Develop digital checklists, perception scoring systems, and audit templates</li>
          <li>Integrate visual assessment into CAD/Class A reviews</li>
          <li>Customize tools for QA, tooling, and supplier teams</li>
        </ul>
        <span className="font-semibold block mt-2 mb-1">Critical For:</span>
        <span className="text-[#4B5563]">Automotive & Aerospace, White Goods & Electronics, Design Studios, In-house R&D Labs, Tier 1 Suppliers</span>
      </>
    ),
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