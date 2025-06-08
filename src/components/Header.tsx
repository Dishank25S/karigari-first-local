import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '/karigari-logo.svg';

interface HeaderProps {
  scrolled: boolean;
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap backdrop-blur-sm ${
      isActive 
        ? 'text-white bg-black/80 shadow-lg border border-white/20' 
        : 'text-gray-800 hover:text-black hover:bg-white/30 hover:backdrop-blur-md border border-transparent hover:border-white/20'
    }`;

  return (
    <motion.header 
      className="fixed top-4 left-4 right-4 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -150,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4,
        ease: 'easeOut'
      }}
    >      <div className="backdrop-blur-3xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl px-6 py-4 relative overflow-hidden">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent pointer-events-none"></div>
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto">
          
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Karigari Logo"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
              <NavLink to="/kalp" className={navLinkClasses}>KALP</NavLink>
              <NavLink to="/kaaya" className={navLinkClasses}>KAAYA</NavLink>
            </nav>            <Link 
              to="/contact" 
              className="bg-black/80 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap border border-white/20"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-800 hover:text-black focus:outline-none p-2 rounded-full hover:bg-white/30 hover:backdrop-blur-md transition-all duration-300 border border-transparent hover:border-white/20"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Mobile menu glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>
          <div className="relative p-6">
            <nav className="flex flex-col space-y-4">              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                    isActive 
                      ? 'text-white bg-black/80 border-white/20' 
                      : 'text-gray-800 hover:text-black hover:bg-white/30 hover:backdrop-blur-md border-transparent hover:border-white/20'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                    isActive 
                      ? 'text-white bg-black/80 border-white/20' 
                      : 'text-gray-800 hover:text-black hover:bg-white/30 hover:backdrop-blur-md border-transparent hover:border-white/20'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>              <NavLink 
                to="/kalp" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                    isActive 
                      ? 'text-white bg-black/80 border-white/20' 
                      : 'text-gray-800 hover:text-black hover:bg-white/30 hover:backdrop-blur-md border-transparent hover:border-white/20'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                KALP
              </NavLink>              <NavLink 
                to="/kaaya" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                    isActive 
                      ? 'text-white bg-black/80 border-white/20' 
                      : 'text-gray-800 hover:text-black hover:bg-white/30 hover:backdrop-blur-md border-transparent hover:border-white/20'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                KAAYA
              </NavLink>              <Link 
                to="/contact" 
                className="bg-black/80 backdrop-blur-sm text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-black/90 transition-all duration-300 text-center mt-2 border border-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
