import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-24">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Your Space Today
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact Nexus Creation for a consultation and let us bring your vision to life!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-200"
          >
            Get Free Quote
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 bg-black text-white border-2 border-white rounded-xl hover:bg-black/80 transition-all duration-200"
          >
            About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 