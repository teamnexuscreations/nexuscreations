import React from 'react';
import { CheckCircle, ArrowRight, Grid2X2, Shield, Wrench, Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const CustomTileInstallations = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Grid2X2,
      title: 'Custom Patterns',
      description: 'Unique designs tailored to your style and space requirements'
    },
    {
      icon: Shield,
      title: 'Quality Materials',
      description: 'Premium tiles and installation materials for lasting durability'
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Professional installation by experienced craftsmen'
    },
    {
      icon: Clock,
      title: 'Timely Completion',
      description: 'Projects completed on schedule with minimal disruption'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      title: 'Modern Bathroom Tile'
    },
    {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      title: 'Kitchen Backsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      title: 'Floor Installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      title: 'Custom Pattern'
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
                Custom Tile Installations
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your space with our expert tile installation services. From intricate patterns to modern designs, we bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/gallery" 
                  className="px-8 py-4 bg-black text-white border-2 border-white rounded-xl hover:bg-black/80 flex items-center justify-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                alt="Custom Tile Installation"
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
              Why Choose Our Tile Installation Services
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              We combine expertise, quality materials, and attention to detail to deliver exceptional results.
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
              Our Recent Projects
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Browse through our portfolio of completed tile installations.
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/80 mb-12">
              Contact us today for a free consultation and quote. Our experts are ready to help bring your vision to life.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-6">
                {['Free consultation', 'Detailed quote', 'Expert advice', 'Professional installation'].map((item, index) => (
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

export default CustomTileInstallations; 