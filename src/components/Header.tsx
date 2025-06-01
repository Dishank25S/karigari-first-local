import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-black' : 'text-black hover:text-cyan-500'
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'hover:after:w-full'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'header-blur shadow-lg border-b border-gray-300 py-3 bg-white' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-medium tracking-tight text-cyan-500">
              Karigari
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex items-center space-x-4 lg:space-x-8">
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
              <NavLink to="/kalp" className={navLinkClasses}>KALP</NavLink>
              <NavLink to="/kaaya" className={navLinkClasses}>KAAYA</NavLink>
            </nav>
            <Link to="/contact" className="btn btn-primary text-sm px-4">
              Get in touch
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              className="text-black focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white backdrop-blur-md w-full border-b border-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block py-2 text-sm ${isActive ? 'text-black' : 'text-black hover:text-cyan-500'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `block py-2 text-sm ${isActive ? 'text-black' : 'text-black hover:text-cyan-500'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/kalp" 
                className={({ isActive }) => 
                  `block py-2 text-sm ${isActive ? 'text-black' : 'text-black hover:text-cyan-500'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                KALP
              </NavLink>
              <NavLink 
                to="/kaaya" 
                className={({ isActive }) => 
                  `block py-2 text-sm ${isActive ? 'text-black' : 'text-black hover:text-cyan-500'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                KAAYA
              </NavLink>
              <Link 
                to="/contact" 
                className="btn btn-primary w-full justify-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
