import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 md:pt-64 pb-16 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Space with Expert Renovation Services
          </h1>
          <p className="text-xl text-white mb-8">
            Premium interior renovations and tile installations that bring your vision to life. 
            Experience craftsmanship that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 flex items-center justify-center transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/gallery" 
              className="px-8 py-4 bg-black text-white border-2 border-white rounded-xl hover:bg-black/80 transition-all duration-200 flex items-center justify-center"
            >
              View Our Projects
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-white/20 p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-white">Projects Completed</p>
            </div>
            <div className="bg-black/50 border border-white/20 p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-white">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
