import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, MessageCircle, CheckCircle } from 'lucide-react';

interface MethodStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const methodSteps: MethodStep[] = [
  {
    icon: <Search size={24} />,
    title: "Research",
    description: "We begin with deep research into user perception, brand context, and market positioning to identify opportunities."
  },
  {
    icon: <Palette size={24} />,
    title: "Design",
    description: "Our experts craft thoughtful design solutions that engage the senses and elevate the perception of your brand."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Feedback",
    description: "We collaborate closely with stakeholders, refining designs through iterative perception testing and feedback."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Delivery",
    description: "The final design solutions are delivered with comprehensive guidelines ensuring consistent implementation."
  }
];

const MethodSection: React.FC = () => {
  return (
    <section className="section bg-secondary-light dark:bg-secondary-dark relative overflow-hidden transition-colors duration-300">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-neutral-700/20 rounded-full -mr-48 -mt-48"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-primary-light dark:text-primary-dark">Our Method</h2>
          <p className="max-w-2xl mx-auto text-secondary-light dark:text-secondary-dark">
            Our approach combines deep human perception insights with meticulous craftsmanship to create designs that resonate on a profound level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-primary-light dark:bg-primary-dark p-8 relative group cursor-pointer border border-divider-light dark:border-divider-dark"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light dark:bg-secondary-dark text-gold mb-6 group-hover:bg-gold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-all duration-300"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl mb-3 text-primary-light dark:text-primary-dark group-hover:text-gold transition-colors duration-300">{step.title}</h3>
              <p className="text-secondary-light dark:text-secondary-dark">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-700/20 rounded-full -ml-32 -mb-32"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default MethodSection;