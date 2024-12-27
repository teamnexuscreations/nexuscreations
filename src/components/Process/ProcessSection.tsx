import React from 'react';
import ProcessHeader from './ProcessHeader';
import ProcessSteps from './ProcessSteps';

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessHeader />
        <ProcessSteps />
      </div>
    </section>
  );
};

export default ProcessSection;