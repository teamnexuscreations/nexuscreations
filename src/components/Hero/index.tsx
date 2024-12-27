import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </div>
  );
};

export default Hero;