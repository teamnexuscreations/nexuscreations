import React from 'react';
import { CheckCircle, MapPin, Clock, Users, Sparkles, Shield } from 'lucide-react';

const AboutUs = () => {
  const expertise = [
    {
      title: 'Custom Tile Installations',
      points: [
        'Professional installation of backsplashes, wall tiles, and floor tiles that enhance the aesthetics and functionality of any space.',
        'From classic subway tiles to intricate penny tile patterns and modern geometric designs, our work reflects both precision and style.'
      ]
    },
    {
      title: 'Bathroom Renovations',
      points: [
        'Transform your bathroom into a luxurious, modern retreat with our expert renovations.',
        'We focus on clean designs, waterproof solutions, and high-quality finishes to ensure long-lasting beauty and functionality.'
      ]
    },
    {
      title: 'Kitchen Transformations',
      points: [
        'Our team specializes in creating beautiful and durable kitchen backsplashes, countertops, and tiled surfaces that add both style and practicality.',
        'We ensure every detail aligns with your needs, delivering kitchens that are modern, inviting, and built to last.'
      ]
    },
    {
      title: 'Attention to Detail and Craftsmanship',
      points: [
        'With years of experience, we pride ourselves on our meticulous attention to detail.',
        'From perfect tile alignment to seamless grout finishes, we deliver work that reflects exceptional quality and durability.'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Backed by years of experience, our skilled team brings a blend of craftsmanship, innovation, and reliability to every project.'
    },
    {
      icon: MapPin,
      title: 'British Columbia-Based Excellence',
      description: 'As a local company, we understand the unique needs of our community and tailor our services accordingly.'
    },
    {
      icon: Shield,
      title: 'Client-Centric Approach',
      description: 'We work closely with our clients to ensure their vision, preferences, and timelines are always met.'
    },
    {
      icon: Sparkles,
      title: 'Innovative Designs',
      description: 'Staying ahead of design trends, we offer modern, stylish solutions that transform interiors into extraordinary spaces.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We complete projects efficiently without compromising on quality, ensuring a seamless renovation experience.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Nexus Creation</h1>
            <p className="text-xl text-white/90">
              At Nexus Creation, a British Columbia, Canada-based company, we specialize in high-quality interior renovation 
              and tile installation services, transforming residential and commercial spaces with precision and creativity. 
              With years of experience, we have built a reputation for delivering exceptional craftsmanship and modern designs 
              that bring our clients' visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {expertise.map((item, index) => (
              <div key={index} className="border border-black rounded-xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                      <span className="text-black">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Nexus Creation?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="border border-white/20 rounded-xl p-8">
                <item.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-8">Our Commitment</h2>
            <p className="text-xl text-black mb-8">
              At Nexus Creation, we believe every space has the potential for transformation. From small upgrades 
              to full-scale renovations, our commitment to excellence, precision, and customer satisfaction sets us apart. 
              Whether you're looking to revamp your bathroom, kitchen, or any interior space, we bring your ideas to life 
              with quality workmanship and stunning designs.
            </p>
            <p className="text-xl font-semibold text-black">
              Nexus Creation – Transforming Interiors Across British Columbia, Canada, One Tile at a Time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 