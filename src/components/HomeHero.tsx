import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <video
        src={"/hero section.mp4.mp4"}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      />
    </section>
  );
};

export default HomeHero;
