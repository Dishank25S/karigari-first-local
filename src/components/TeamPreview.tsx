import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aanya Sharma",
    role: "Design Director",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Perception Specialist",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Creative Lead",
    image: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Experience Designer",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TeamPreview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-[#171717]">Meet Our Team</h2>
          <p className="max-w-2xl mx-auto text-[#4B5563]">
            Our team of expert designers and perception specialists bring diverse perspectives and deep expertise to every project.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-[#F5F5F5] border border-[#E5E5E5]"
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Grayscale image that transitions to color on hover */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 img-zoom-effect"
                />
                {/* Overlay that fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {/* Text content that appears on hover */}
                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-[#171717] text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/about" className="btn btn-primary">
            About Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;