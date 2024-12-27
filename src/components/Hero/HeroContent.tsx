import React from 'react';
import HeroHeading from './HeroHeading';
import HeroStats from './HeroStats';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 max-w-4xl">
        <HeroHeading />
        <HeroButtons />
        <HeroStats />
      </div>
    </div>
  );
};

export default HeroContent;