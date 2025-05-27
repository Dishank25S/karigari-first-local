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
  isGif?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luminous Essence Collection",
    category: "Product Design",
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
    aspectRatio: "pb-[125%]",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Serenity Living Spaces",
    category: "Interior Design",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    aspectRatio: "pb-[85%]",
    span: "md:col-span-1"
  },
  {
    id: 3,
    title: "Digital Art Flow",
    category: "Motion Design",
    image: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    aspectRatio: "pb-[100%]",
    span: "md:col-span-1",
    isGif: true
  },
  {
    id: 4,
    title: "Tactile Precision Instruments",
    category: "Industrial Design",
    image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg",
    aspectRatio: "pb-[75%]",
    span: "md:col-span-2"
  },
  {
    id: 5,
    title: "Artisanal Crafted Spaces",
    category: "Spatial Design",
    image: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg",
    aspectRatio: "pb-[133%]",
    span: "md:col-span-1"
  },
  {
    id: 6,
    title: "Geometric Harmony",
    category: "Animation Design",
    image: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    aspectRatio: "pb-[85%]",
    span: "md:col-span-2",
    isGif: true
  },
  {
    id: 7,
    title: "Urban Oasis Project",
    category: "Architecture",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    aspectRatio: "pb-[100%]",
    span: "md:col-span-1"
  },
  {
    id: 8,
    title: "Sculptural Elements Series",
    category: "Art Direction",
    image: "https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg",
    aspectRatio: "pb-[125%]",
    span: "md:col-span-2"
  },
  {
    id: 9,
    title: "Zen Garden Collection",
    category: "Landscape Design",
    image: "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg",
    aspectRatio: "pb-[100%]",
    span: "md:col-span-1"
  },
  {
    id: 10,
    title: "Minimalist Luxury Suite",
    category: "Interior Design",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
    aspectRatio: "pb-[85%]",
    span: "md:col-span-2"
  },
  {
    id: 11,
    title: "Sustainable Living Pods",
    category: "Eco Design",
    image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
    aspectRatio: "pb-[133%]",
    span: "md:col-span-1"
  },
  {
    id: 12,
    title: "Heritage Revival Project",
    category: "Restoration Design",
    image: "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg",
    aspectRatio: "pb-[100%]",
    span: "md:col-span-2"
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="section bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-center text-primary-light dark:text-primary-dark">Featured Projects</h2>
          <p className="text-center max-w-2xl mx-auto text-secondary-light dark:text-secondary-dark">
            Explore our selected works that showcase our commitment to perception-driven design excellence and timeless craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className={`group relative cursor-pointer ${project.span}`}
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01]">
                <div className={`relative ${project.aspectRatio}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${project.isGif ? 'object-contain bg-primary-light dark:bg-primary-dark' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 max-w-[80%]">
                    <span className="text-white text-sm tracking-wider mb-2 block font-medium drop-shadow-[0_0_3px_#facc15]">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-serif leading-tight mb-3 drop-shadow-[0_0_4px_#facc15]">
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
            className="btn btn-primary inline-flex items-center group"
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
