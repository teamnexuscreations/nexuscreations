import React from 'react';

const HeroHeading = () => {
  return (
    <div className="mb-8">
      <div className="inline-block">
        <span className="text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-6 block w-fit">
          Premium Renovation Services
        </span>
      </div>
      <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Crafting Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Dream Space</span> Into Reality
      </h1>
      <p className="text-xl text-indigo-100/90 max-w-2xl">
        Transform your living spaces with our expert craftsmanship. We bring innovation, precision, 
        and artistry to every renovation project.
      </p>
    </div>
  );
};

export default HeroHeading;