import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScroll } from '../context/ScrollContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { activeSection } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'WORK' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const LightningMLogo = () => (
    <motion.div
      whileHover={{ scale: 1.1, rotateY: 15 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 cursor-pointer relative group perspective-1000"
      onClick={() => scrollToSection('home')}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Zap className="w-7 h-7 text-white drop-shadow-lg" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 
        rounded-full border border-white/10 backdrop-blur-lg 
        bg-black/70 shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <LightningMLogo />
          </div>

          {/* Center: Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-xs font-semibold tracking-wider px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-black bg-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right: Mobile Toggle & Theme Switch (optional) */}
          <div className="flex items-center lg:hidden space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 text-white border border-white/10"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white border border-white/10"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl mt-4 mb-4 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-black bg-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
