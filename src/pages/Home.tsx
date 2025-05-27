import React, { useEffect } from 'react';
import HomeHero from '../components/HomeHero';
import ProjectShowcase from '../components/ProjectShowcase';
import MethodSection from '../components/MethodSection';
import TeamPreview from '../components/TeamPreview';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Karigari | Perception Design Studio';
  }, []);

  return (
    <div className="bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <HomeHero />
      <ProjectShowcase />
      <MethodSection />
      <TeamPreview />
      <ContactSection />
    </div>
  );
};

export default Home;