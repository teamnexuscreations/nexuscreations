import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProcessStep } from './types';

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

const ProcessCard = ({ step, index }: ProcessCardProps) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-black">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold">
        {index + 1}
      </div>

      {/* Content */}
      <div className="mb-6">
        <span className="text-sm font-medium text-black">{step.category}</span>
        <h3 className="mt-2 text-2xl font-bold text-black">{step.title}</h3>
        <p className="mt-4 text-black leading-relaxed">{step.description}</p>
      </div>

      {/* Image */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CTA */}
      <a 
        href={step.link} 
        className="inline-flex items-center text-black hover:text-gray-700 font-medium"
      >
        {step.linkText}
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ProcessCard;