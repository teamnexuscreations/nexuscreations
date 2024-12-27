import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NexusReno Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-gray-600 transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-black hover:text-gray-600 transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute w-full h-8 top-full"></div>
              <div className="absolute hidden group-hover:block w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-xl py-2 border border-black transform translate-y-8 -translate-x-1/4">
                <Link to="/services/bathroom-renovations" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors">
                  Bathroom Renovations
                </Link>
                <Link to="/services/custom-tile-installations" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors">
                  Custom Tile Installations
                </Link>
                <Link to="/services/kitchen-transformations" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors">
                  Kitchen Transformations
                </Link>
              </div>
            </div>
           
            <Link to="/about" className="text-black hover:text-gray-600 transition-colors">About Us</Link>
            <Link to="/gallery" className="text-black hover:text-gray-600 transition-colors">Gallery</Link>
            <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Link to="/contact" className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Home</Link>
            <Link to="/services/bathroom-renovations" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Bathroom Renovations</Link>
            <Link to="/services/kitchen-transformations" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Kitchen Transformations</Link>
            <Link to="/services/custom-tile-installations" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Custom Tile Installations</Link>
            <Link to="/gallery" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Gallery</Link>
            <Link to="/about" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;