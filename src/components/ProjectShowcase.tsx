import React from 'react';
import { motion } from 'framer-motion';


interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Touch Interface UI",
    category: "HMI Design",
    description: "Revolutionary human-machine interface design that redefines user interaction through intuitive touch controls and seamless visual feedback systems.",
    image: "image 2.jpg",
    aspectRatio: "aspect-[16/10]" // More balanced wide rectangle
  },  {
    id: 2,
    title: "Silhouette Car Concept",
    category: "Automotive Design",
    description: "Sleek automotive silhouette showcasing modern aerodynamic principles with emphasis on form, function, and aesthetic harmony in vehicle design.",
    image: "image 3.jpg",
    aspectRatio: "aspect-[4/3]" // Standard 4:3 ratio for better viewing
  },
  {
    id: 3,
    title: "Wireframe Aircraft",
    category: "Aerospace Engineering",
    description: "Precision-engineered aircraft wireframe demonstrating structural integrity and aerodynamic efficiency through innovative design methodologies.",
    image: "image 5.jpg",
    aspectRatio: "aspect-[5/2]" // Much shorter height for ultra-wide images
  },
  {
    id: 4,
    title: "Jet Turbine Detail",
    category: "Mechanical Engineering",
    description: "Intricate turbine component design highlighting the intersection of engineering excellence and manufacturing precision in aerospace applications.",
    image: "image 6.jpg",
    aspectRatio: "aspect-[1/1]" // Perfect square - kept as is
  },
  {
    id: 5,
    title: "Futuristic Aircraft",
    category: "Concept Design",
    description: "Next-generation aircraft concept that pushes the boundaries of conventional design while maintaining practical engineering considerations.",
    image: "image 10.png",
    aspectRatio: "aspect-[16/10]" // Standard golden ratio for better UX
  },  {
    id: 6,
    title: "Smartphone Interface",
    category: "Tech Product UI",
    description: "Modern smartphone interface design focusing on user experience optimization and visual hierarchy for enhanced digital interaction.",
    image: "image 13.jpg",
    aspectRatio: "aspect-[9/8]" // Less elongated mobile format
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
        </div>        <div className="space-y-16 lg:space-y-24">          {/* Special layout for first two projects - side by side with staggered positioning */}          {projects.slice(0, 2).length === 2 && (
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
                          {projects[0].category}
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
                          {projects[1].category}
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
                className="group"
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
                          {project.category}
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
      </div>
    </section>
  );
};

export default ProjectShowcase;
