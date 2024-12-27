import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Professional installation of backsplashes, wall tiles, and floor tiles',
  'From classic subway tiles to modern geometric designs',
  'Expert bathroom and kitchen transformations with attention to detail'
];

const ServicesSplitContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
      <div>
        <span className="text-sm font-semibold text-white bg-black px-4 py-1.5 rounded-full">
          Our Expertise
        </span>
        <h2 className="mt-6 text-4xl font-bold text-black sm:text-5xl leading-tight">
          Exceptional Custom Tile Installations for Every Space
        </h2>
        <p className="mt-6 text-xl text-black">
          We specialize in custom tile installations that elevate your interiors. From intricate designs to modern aesthetics, our craftsmanship ensures a flawless finish.
        </p>
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
              <span className="text-black">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center group"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/gallery" 
            className="px-8 py-4 border-2 border-black text-black rounded-xl hover:bg-gray-50 transition-all duration-200"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Custom Tile Installation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-black">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">100+</p>
              <p className="text-black">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSplitContent;