import React from 'react';
import ServicesSplitContent from './ServicesSplitContent';
import ServicesGrid from './ServicesGrid';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesSplitContent />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default ServicesSection;