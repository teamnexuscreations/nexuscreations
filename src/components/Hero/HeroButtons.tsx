import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30">
        <Calendar className="w-5 h-5 mr-2" />
        Book Consultation
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200">
        Explore Projects
      </button>
    </div>
  );
};

export default HeroButtons;