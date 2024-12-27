import React from 'react';
import ProcessCard from './ProcessCard';
import { processSteps } from './processData';

const ProcessSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {processSteps.map((step, index) => (
        <ProcessCard key={index} step={step} index={index} />
      ))}
    </div>
  );
};

export default ProcessSteps;