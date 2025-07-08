import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code, Zap } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Matrix-style background effect
  const MatrixRain = () => {
    const chars = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    return (
      <div className="matrix-bg">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="matrix-char"
            style={{
              left: `${i * 20}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {chars[Math.floor(Math.random() * chars.length)]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
      {/* Matrix Background */}
      <MatrixRain />
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-white/5 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/5 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 glass-light rounded-full text-gray-300 font-medium text-sm border border-white/10">
                <Code className="mr-2" size={14} />
                Developer & Creator
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
            >
              <span className="text-Yellow">
                MOTINATH
              </span>
              
            </motion.h1>

            

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg"
            >
              Engineer by degree, creator by passion, and developer by craft.
              I blend circuit logic with creative thinking to build engaging websites and content.
              From soldering boards to designing scrollable stories. I do it all, with precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.70 }}
                className="group inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-lg transition-all duration-300 text-base hover:shadow-xl"
              >
                <Mail className="mr-3" size={10} />
                Contact
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.a
                href="/Motinath Rajendran.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.70 }}
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-bold rounded-lg transition-all duration-300 text-base"
              >
                <Download className="mr-3" size={10} />
                DOWNLOAD RESUME
              </motion.a>
            </motion.div>

            
          </motion.div>

          {/* Right Content - 3D Character */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Minimalist floating ring */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 border border-white/10 rounded-full"
              />

              {/* Character container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto"
              >
                {/* 3D Character with dark theme */}
                <div className="relative w-full h-full glass-light rounded-full overflow-hidden border border-white/10 shadow-dark-2xl">
                  <img
                    src="3D Avatar.png"
                    alt="Motinath - Professional Avatar"
                    className="w-full h-full object-cover contrast-125"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating tech elements */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-10 h-10 glass-light border border-white/20 rounded-lg flex items-center justify-center"
                >
                  <Zap className="text-white" size={20} />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360, y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 glass-light border border-white/20 rounded-full flex items-center justify-center"
                >
                  <Code className="text-white" size={20} />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 -right-6 w-6 h-6 bg-white/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

  
     
    </section>
  );
}