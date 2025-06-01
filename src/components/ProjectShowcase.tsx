import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: string;
  span: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Touch Interface UI",
    category: "HMI Design",
    image: "image 2.jpg",
    aspectRatio: "pb-[100%]",
    span: "col-span-2"
  },
  {
    id: 2,
    title: "Silhouette Car Concept",
    category: "image 3.png",
    image: "image 3.jpg",
    aspectRatio: "pb-[100%]",
    span: "col-span-2"
  },
  {
    id: 3,
    title: "Wireframe Aircraft",
    category: "image 5.png",
    image: "image 5.jpg",
    aspectRatio: "pb-[80%]",
    span: "col-span-2"
  },
  {
    id: 4,
    title: "Jet Turbine Detail",
    category: "image 7.png",
    image: "image 6.jpg",
    aspectRatio: "pb-[130%]",
    span: "col-span-1"
  },
  {
    id: 5,
    title: "Futuristic Aircraft",
    category: "image 10.png",
    image: "image 10.png",
    aspectRatio: "pb-[100%]",
    span: "col-span-1"
  },
  {
    id: 6,
    title: "Smartphone Back Design",
    category: "Tech Product UI",
    image: "image 13.jpg",
    aspectRatio: "pb-[125%]",
    span: "col-span-2"
  },
  {
    id: 7,
    title: "Hi-Fi Headphones",
    category: "Product Photography",
    image: "image 14.jpg",
    aspectRatio: "pb-[100%]",
    span: "col-span-2"
  },
  {
    id: 8,
    title: "Luxury Car Door Interior",
    category: "Interior Trim UI",
    image: "image 15.jpg",
    aspectRatio: "pb-[40%]",
    span: "col-span-4"
  },
  {
    id: 9,
    title: "Precision Interior Fit",
    category: "Perceived Quality - Automotive",
    image: "image 16.jpg",
    aspectRatio: "pb-[80%]",
    span: "col-span-2"
  },
  {
    id: 10,
    title: "Aircraft Cabin Finish",
    category: "Perceived Quality - Aerospace",
    image: "image 7.jpg",
    aspectRatio: "pb-[100%]",
    span: "col-span-2"
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="section bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <div className="w-full max-w-none px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-center text-primary-light dark:text-primary-dark font-bold text-2xl sm:text-3xl">
            Featured Projects
          </h2>
          <p className="text-center max-w-2xl mx-auto text-secondary-light dark:text-secondary-dark text-sm sm:text-base">
            Explore our selected works that showcase our commitment to perception-driven design excellence and timeless craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className={`group relative cursor-pointer ${project.span.replace('col-span', 'md:col-span')}`}
            >
              <div className="relative overflow-hidden border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01]">
                <div className={`relative ${project.aspectRatio}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 max-w-[80%]">
                    <span className="text-white text-xs tracking-wider mb-1 block font-medium drop-shadow-[0_0_3px_#facc15]">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-serif leading-tight mb-2 drop-shadow-[0_0_4px_#facc15]">
                      {project.title}
                    </h3>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-white text-sm group/link drop-shadow-[0_0_3px_#facc15] hover:text-yellow-300"
                    >
                      View Project
                      <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/projects"
            className="btn btn-primary inline-flex items-center group text-sm sm:text-base px-4 py-2"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
