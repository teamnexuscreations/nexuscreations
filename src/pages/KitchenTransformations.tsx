import React from 'react';
import { CheckCircle, ArrowRight, ChefHat, Utensils, Lightbulb, Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const KitchenTransformations = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ChefHat,
      title: 'Chef-Inspired Design',
      description: 'Functional layouts optimized for cooking and entertaining'
    },
    {
      icon: Utensils,
      title: 'Premium Appliances',
      description: 'High-end appliances and fixtures for the modern kitchen'
    },
    {
      icon: Lightbulb,
      title: 'Smart Solutions',
      description: 'Innovative storage and lighting solutions'
    },
    {
      icon: Clock,
      title: 'Timely Execution',
      description: 'Efficient renovation process with minimal kitchen downtime'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      title: 'Modern Kitchen Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      title: 'Luxury Kitchen Island'
    },
    {
      url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7',
      title: 'Contemporary Cabinetry'
    },
    {
      url: 'https://images.unsplash.com/photo-1556185781-a47769abb7ee',
      title: 'Gourmet Kitchen Space'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Luxury Kitchen Transformations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your kitchen into a stunning culinary haven. We specialize in creating beautiful, functional spaces where memories are made.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/gallery" 
                  className="px-8 py-4 bg-black text-white border-2 border-white rounded-xl hover:bg-black/80 flex items-center justify-center"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                alt="Luxury Kitchen Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Complete Kitchen Solutions
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your kitchen transformation with expertise and precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-black rounded-xl">
                <feature.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Kitchen Masterpieces
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our portfolio of stunning kitchen transformations and get inspired for your project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl text-black/80 mb-12">
              Let's discuss your vision and create a kitchen that exceeds your expectations. Contact us for a free consultation.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-6">
                {[
                  'Complimentary design consultation',
                  'Custom cabinetry options',
                  'Premium material selection',
                  'Expert installation team'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-black text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to="/contact"
              className="px-12 py-5 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center mx-auto text-lg font-medium"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenTransformations; 