import React from 'react';
import { Facebook, Instagram, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <img src={logo} alt="NexusReno Logo" className="h-12 w-auto" />
            <p className="text-sm text-black">
              Transforming spaces with precision and style. Your vision, our expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-black hover:text-gray-600">Home</Link></li>
              <li><Link to="/services/bathroom-renovations" className="text-black hover:text-gray-600">Bathroom Renovations</Link></li>
              <li><Link to="/services/kitchen-transformations" className="text-black hover:text-gray-600">Kitchen Transformations</Link></li>
              <li><Link to="/services/custom-tile-installations" className="text-black hover:text-gray-600">Custom Tile Installations</Link></li>
              <li><Link to="/about" className="text-black hover:text-gray-600">About Us</Link></li>
              <li><Link to="/contact" className="text-black hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/share/187qh27GVf/?mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                <Facebook size={20} /> Facebook
              </a>
              <a 
                href="https://www.instagram.com/teamnexuscreations?igsh=NHVuYTZ1dWhpdGhx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                <Instagram size={20} /> Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/nexuscreations/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://linktr.ee/teamnexuscreations?ltsid=720d63d6-bac7-4b38-a970-8c9a6ec0efea" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                <LinkIcon size={20} /> Linktree
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black">
              © 2024 Nexus Creation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-black">
              Made by <a href="https://www.instagram.com/_karanvirkang_" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-gray-600">Karanvir Singh Kang</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
