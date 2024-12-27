import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import Testimonial from './Testimonial';
import { kitchenFeatures, testimonial } from './data';

const KitchenSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-black px-4 py-2 rounded-full mb-6">
            <ChefHat className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">Kitchen Excellence</span>
          </div>
          <h2 className="text-4xl font-bold text-black sm:text-5xl mb-6">
            Transform Your Kitchen Into a
            <span className="block">
              Culinary Paradise
            </span>
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Experience the perfect blend of functionality and style with our expert kitchen renovation services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {kitchenFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto">
          <Testimonial testimonial={testimonial} />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 inline-block"
          >
            Start Your Kitchen Transformation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KitchenSection;