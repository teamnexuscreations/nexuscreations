import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+1 (778) 325-6645'],
      description: 'Monday to Friday, 8am - 6pm'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['teamnexuscreations@gmail.com'],
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 8am - 6pm',
        'Saturday: 9am - 4pm',
        'Sunday: Closed'
      ],
      description: 'Available for emergencies'
    }
  ];

  const services = [
    'Bathroom Renovations',
    'Kitchen Transformations',
    'Custom Tile Installations',
    'Interior Renovations',
    'Commercial Projects'
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'your-email@example.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.text === 'OK') {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Ready to transform your space? Get in touch with us today for a free consultation 
              and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="border border-black rounded-xl p-8">
                <item.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-black font-medium">{detail}</p>
                ))}
                <p className="text-black/70 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-black mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your First Name"
                      required
                      className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-black mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your Last Name"
                      required
                      className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-black mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-black mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Services List */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">Our Services</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border border-white/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{service}</h3>
                    <p className="text-white/70">
                      Professional {service.toLowerCase()} with attention to detail and quality craftsmanship.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 