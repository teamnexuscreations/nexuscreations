import React from 'react';
import { Sparkles, Ruler, Palette, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Sparkles,
    title: 'Luxury Finishes',
    description: 'Premium materials and fixtures that elevate your space'
  },
  {
    icon: Ruler,
    title: 'Custom Designs',
    description: 'Tailored solutions that match your style and space'
  },
  {
    icon: Palette,
    title: 'Expert Planning',
    description: 'Detailed 3D renderings and material selection guidance'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Efficient execution with minimal disruption'
  }
];

const BathroomSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Bathroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="text-center">
                <p className="text-3xl font-bold text-black mb-1">98%</p>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-sm font-semibold text-black bg-gray-100 px-4 py-1.5 rounded-full">
              Bathroom Transformation
            </span>
            <h2 className="mt-6 text-4xl font-bold text-black sm:text-5xl leading-tight">
              Create Your Perfect
              <br />
              Bathroom Retreat
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Transform your bathroom into a luxurious sanctuary with our expert renovation services. 
              We combine stunning design with practical functionality to create spaces you'll love.
            </p>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-black p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{feature.title}</h3>
                    <p className="mt-1 text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/gallery" 
                className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BathroomSection;