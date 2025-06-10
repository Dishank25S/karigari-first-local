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
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg px-4">
          Designing Perception, Shaping Perspective
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
