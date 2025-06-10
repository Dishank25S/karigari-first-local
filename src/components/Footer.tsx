import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowRight, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white transition-colors duration-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl md:text-2xl font-serif font-medium tracking-tight text-black">Karigari</span>
            </Link>
            <div className="flex items-start space-x-2 mb-4">
              <MapPin size={16} className="text-black mt-1 flex-shrink-0" />
              <p className="text-black text-sm sm:text-base">
                Baner-Pashan Link Road, Pune, Maharashtra 411021, India
              </p>
            </div>
            <p className="text-black mb-6 max-w-md text-sm sm:text-base">
              Translating human perception into design excellence. A premium design studio focused on craftsmanship and timeless elegance.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/karigari.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center hover:text-black text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://www.instagram.com/karigari.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center hover:text-black text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6 text-black">Navigation</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li><Link to="/" className="text-black hover:text-black transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="text-black hover:text-black transition-colors duration-300">About</Link></li>
                <li><Link to="/services" className="text-black hover:text-black transition-colors duration-300">Services</Link></li>
                <li><Link to="/kalp" className="text-black hover:text-black transition-colors duration-300">KALP</Link></li>
                <li><Link to="/kaaya" className="text-black hover:text-black transition-colors duration-300">KAAYA</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6 text-black">Subscribe</h4>
              <p className="text-black mb-4 text-sm">Stay updated with our newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full py-2.5 px-4 pr-12 rounded-full bg-gray-100 text-black placeholder-gray-500 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                />
                <button 
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-2 rounded-full transition duration-300 shadow-md"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs sm:text-sm text-black text-center sm:text-left">
            &copy; {currentYear} Karigari Design Studio. All rights reserved.
          </p>          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-black">
            <Link to="/privacy-policy" className="hover:text-black transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
