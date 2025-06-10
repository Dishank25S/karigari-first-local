import React from 'react';
import { motion } from 'framer-motion';


interface Project {
  id: number;
  title: string;
  industry: string; // changed from category
  description: string;
  image: string;
  aspectRatio: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PQ Project Support",
    industry: "Automotive Industry",
    description: "We partner with your teams to enhance perceived quality at every stage design, development, and execution. From surfaces to interfaces, we help turn customer expectations into high-quality experiences.",
    image: "image 2.jpg",
    aspectRatio: "aspect-[16/10]" // More balanced wide rectangle
  },  {
    id: 2,
    title: "Premiumization Study & Perceived Value Mapping",
    industry: "Automotive Design",
    description: "We decode what “premium” means to your customer.Through ethnographic studies and sensory audits, we map perceived value across visual, tactile, and auditory touchpoints defining what truly justifies a higher price tag in their eyes.",
    image: "image 3.jpg",
    aspectRatio: "aspect-[4/3]" // Standard 4:3 ratio for better viewing
  },
  {
    id: 3,
    title: "PQ Merit/ Demerit Study & Competition Analysis",
    industry: "Aerospace Engineering",
    description: "We evaluate how your product compares to competitors in terms of perceived value. Clear insights into strengths, gaps, and user impressions help shape better design decisions.",
    image: "image 5.jpg",
    aspectRatio: "aspect-[5/2]" // Much shorter height for ultra-wide images
  },
  {
    id: 4,
    title: "Concept Development & Digital Sculpting",
    industry: "Mechanical Engineering",
    description: "From sketch to surface, we bring design ideas to life with form and finesse. Our sculpting process focuses on proportions, surfaces and details to ensure higher emotional appeal.",
    image: "image 6.jpg",
    aspectRatio: "aspect-[1/1]" // Perfect square - kept as is
  },
  {
    id: 5,
    title: "Brand Identity Design & CMF Strategy",
    industry: "Concept Design",
    description: "We design brands that look sharp and feel premium, on screen and in hand. From logos to materials and finishes, we build a unified identity that reflects your brand’s perception.",
    image: "image 10.png",
    aspectRatio: "aspect-[16/10]" // Standard golden ratio for better UX
  },  {
    id: 6,
    title: "Animation & VR Visualization",
    industry: "Tech Product UI",
    description: "We create high-end visuals and immersive experiences to preview your product before it’s built. Great for internal reviews, storytelling, and showcasing quality in motion.",
    image: "image 13.jpg",
    aspectRatio: "aspect-[9/8]" // Less elongated mobile format
  },
  {
    id: 7,
    title: "User Experience Audit & Redesign",
    industry: "Consumer Electronics",
    description: "We analyze and redesign digital and physical touchpoints for seamless, delightful user experiences that drive loyalty and satisfaction.",
    image: "image 14.jpg",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 8,
    title: "PQ Process Setup",
    industry: "FMCG",
    description: "We help teams build systems to deliver quality consistently. From training to tools, we guide you in making PQ part of your everyday design and development process.",
    image: "image 15.jpg",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 9,
    title: "Future Consumer Trend Reports",
    industry: "Retail Design",
    description: "Stay ahead of evolving expectations. We craft insight-driven reports combining socio-cultural research, design forecasting, and consumer behavior trends helping brands anticipate what the next generation of users will see as “quality.”",
    image: "image 16.jpg",
    aspectRatio: "aspect-[5/2]"
  },
  {
    id: 10,
    title: "Materiality, Design Quality & Sensory Impression Brief Analysis",
    industry: "Marketing & Advertising",
    description: "We review your design briefs through a perception lens. Our feedback ensures materials, textures, and details align with your brand’s quality goals—right from the start.",
    image: "image 7.jpg",
    aspectRatio: "aspect-[1/1]"
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="section bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary-light dark:text-primary-dark font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="text-secondary-light dark:text-secondary-dark text-base lg:text-lg max-w-2xl">
              Explore our selected works that showcase our commitment to perception-driven design excellence.
            </p>
          </motion.div>
        </div>
        {/* Desktop/Laptop Layout */}
        <div className="hidden md:block space-y-12">
          {/* Special layout for first two projects - side by side with staggered positioning */}
          {projects.slice(0, 2).length === 2 && (
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="flex justify-between">
                {/* Left Project */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-2/5 group"
                >
                  <div className="flex flex-col space-y-6">
                    {/* Left Image */}
                    <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                      <div className={`relative ${projects[0].aspectRatio}`}>
                        <img
                          src={projects[0].image}
                          alt={projects[0].title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Left Content */}
                    <div className="pl-4 sm:pl-6 lg:pl-8 space-y-4">                      <div>
                        <span className="text-black text-xs lg:text-sm tracking-widest font-medium uppercase mb-2 block">
                          {projects[0].industry}
                        </span>
                        <h3 className="text-primary-light dark:text-primary-dark text-xl lg:text-2xl xl:text-3xl font-serif font-bold mb-4 leading-tight">
                          {projects[0].title}
                        </h3>
                        <p className="text-secondary-light dark:text-secondary-dark text-sm lg:text-base leading-relaxed">
                          {projects[0].description}                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>{/* Right Project - Positioned at half mark */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-2/5 group"
                  style={{ 
                    marginTop: 'clamp(12rem, 35vh, 20rem)' 
                  }}
                >
                  <div className="flex flex-col space-y-6">
                    {/* Right Image */}
                    <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                      <div className={`relative ${projects[1].aspectRatio}`}>
                        <img
                          src={projects[1].image}
                          alt={projects[1].title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Right Content */}
                    <div className="pr-4 sm:pr-6 lg:pr-8 space-y-4">                      <div>
                        <span className="text-black text-xs lg:text-sm tracking-widest font-medium uppercase mb-2 block">
                          {projects[1].industry}
                        </span>
                        <h3 className="text-primary-light dark:text-primary-dark text-xl lg:text-2xl xl:text-3xl font-serif font-bold mb-4 leading-tight">
                          {projects[1].title}
                        </h3>
                        <p className="text-secondary-light dark:text-secondary-dark text-sm lg:text-base leading-relaxed">
                          {projects[1].description}                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Regular alternating layout for remaining projects */}
          {projects.slice(2).map((project, index) => {
            const actualIndex = index + 2; // Adjust index since we're slicing
            const isEven = actualIndex % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group mb-12 last:mb-0"
              >
                <div className="flex flex-col space-y-6">
                  {/* Image Section */}
                  <div className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${isEven ? '' : 'flex justify-end'}`}>
                    <div className={`relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02] ${isEven ? 'w-3/5' : 'w-1/2'}`}>
                      <div className={`relative ${project.aspectRatio}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${isEven ? '' : 'flex justify-end'}`}>
                    <div className={`${isEven ? 'w-3/5 pl-4 sm:pl-6 lg:pl-8' : 'w-1/2 pr-4 sm:pr-6 lg:pr-8'} space-y-4`}>                      <div>
                        <span className="text-black text-xs lg:text-sm tracking-widest font-medium uppercase mb-2 block">
                          {project.industry}
                        </span>
                        <h3 className="text-primary-light dark:text-primary-dark text-xl lg:text-2xl xl:text-3xl font-serif font-bold mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-secondary-light dark:text-secondary-dark text-sm lg:text-base leading-relaxed">
                          {project.description}                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <div className={`relative w-full ${project.aspectRatio}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-black text-xs tracking-widest font-medium uppercase block">
                  {project.industry}
                </span>
                <h3 className="text-primary-light dark:text-primary-dark text-lg font-serif font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
