import React from 'react';
import { Trophy, Calendar, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: Calendar,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: ThumbsUp,
    value: '100%',
    label: 'Client Satisfaction',
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="flex items-center space-x-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
        >
          <div className="p-3 bg-indigo-500/20 rounded-lg">
            <stat.icon className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-0.5">{stat.value}</p>
            <p className="text-sm text-indigo-200/80">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;