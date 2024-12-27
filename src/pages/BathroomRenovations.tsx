import React from 'react';
import { CheckCircle, ArrowRight, Droplets, Sparkles, Layout, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BathroomRenovations = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Layout,
      title: 'Custom Design',
      description: 'Personalized bathroom layouts that maximize space and functionality'
    },
    {
      icon: Sparkles,
      title: 'Luxury Fixtures',
      description: 'Premium fixtures and fittings from leading manufacturers'
    },
    {
      icon: Droplets,
      title: 'Waterproofing',
      description: 'Professional waterproofing for long-lasting protection'
    },
    {
      icon: Clock,
      title: 'Efficient Timeline',
      description: 'Streamlined renovation process with minimal disruption'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      title: 'Modern Master Bathroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      title: 'Luxury Shower Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
      title: 'Contemporary Vanity'
    },
    {
      url: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da',
      title: 'Spa-Like Bathroom'
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
                Luxury Bathroom Renovations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your bathroom into a personal sanctuary. We specialize in creating luxurious, functional spaces that combine style with comfort.
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
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101"
                alt="Luxury Bathroom Design"
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
              Comprehensive Bathroom Solutions
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your bathroom renovation with expertise and attention to detail.
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
              Our Stunning Transformations
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our portfolio of luxurious bathroom renovations and get inspired for your project.
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
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl text-black/80 mb-12">
              Let's discuss your vision and create a bathroom that exceeds your expectations. Contact us for a free consultation.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-6">
                {[
                  'Complimentary design consultation',
                  'Detailed project timeline',
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

export default BathroomRenovations; 