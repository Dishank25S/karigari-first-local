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
  const formaFont = {
    fontFamily: "FormaDJRVariable, FormaDJRText, FormaDJRDisplay, FormaDJRDeck, FormaDJRBanner, FormaDJRMicro, sans-serif"
  };
  const navLinkClasses = "relative text-base font-semibold text-black transition-all duration-300 whitespace-nowrap";

  return (
    <motion.header 
      className="fixed top-6 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -150,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4,
        ease: 'easeOut'
      }}
    >
      <div className="backdrop-blur-2xl bg-white/10 shadow-xl px-0 py-4 relative overflow-hidden" style={{ borderRadius: 0 }}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/0 to-transparent pointer-events-none"></div>
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto px-6">
          
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
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <NavLink to="/about" className={navLinkClasses} style={formaFont}>About</NavLink>
              <NavLink to="/services" className={navLinkClasses} style={formaFont}>Services</NavLink>
              <NavLink to="/kalp" className={navLinkClasses} style={formaFont}>KALP</NavLink>
              <NavLink to="/kaaya" className={navLinkClasses} style={formaFont}>KAAYA</NavLink>
            </nav>
            <Link 
              to="/contact" 
              className="text-base font-semibold text-black transition-all duration-300 ml-8"
              style={formaFont}
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-800 hover:text-black focus:outline-none p-2 hover:bg-white/30 hover:backdrop-blur-md transition-all duration-300 border border-transparent hover:border-white/20"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/20 backdrop-blur-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>
          <div className="relative p-6">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/about" className="block text-base font-semibold text-black" style={formaFont} onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink to="/services" className="block text-base font-semibold text-black" style={formaFont} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
              <NavLink to="/kalp" className="block text-base font-semibold text-black" style={formaFont} onClick={() => setIsMenuOpen(false)}>KALP</NavLink>
              <NavLink to="/kaaya" className="block text-base font-semibold text-black" style={formaFont} onClick={() => setIsMenuOpen(false)}>KAAYA</NavLink>
              <Link to="/contact" className="block text-base font-semibold text-black transition-all duration-300 mt-2" style={formaFont} onClick={() => setIsMenuOpen(false)}>Get in touch</Link>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
