import React from 'react';
import { Link } from 'react-router-dom';
import { services } from './servicesData';
import { CheckCircle2 } from 'lucide-react';

const ServicesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Link 
          key={index} 
          to={service.link} 
          className="group bg-white rounded-2xl overflow-hidden border border-black hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
            <p className="text-black mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesGrid;