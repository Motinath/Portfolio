import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Zap } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
              © 2025 Motinath Rajendran
              
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="/Motinath Rajendran.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Resume
            </a>
            <a
              href="https://github.com/motinath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/motinath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-200 border border-white/20"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

      
      </div>
    </footer>
  );
}