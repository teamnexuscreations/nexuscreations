import React from 'react';
import { KitchenFeature } from './types';

interface FeatureCardProps {
  feature: KitchenFeature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/3]">
        <img 
          src={feature.imageUrl} 
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-200">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;