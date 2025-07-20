import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Folder } from 'lucide-react';

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Motion-Based Message Conveyor',
      category: 'Electronics Engineering',
      description: 'Developed a sensor-integrated communication system for individuals with paralysis using microcontroller programming.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'ESP32', 'Micro controller'],
      github: '',
      demo: '',
      featured: true,
    },
    
    {
      title: 'Interactive 3D Portfolio',
      category: 'Web Development',
      description: 'Immersive 3D portfolio website with WebGL animations and responsive design.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
      github: 'https://github.com/Motinath/Portfolio/tree/main',
      demo: 'https://motinathportfolio.vercel.app/',
      featured: false,
    },
    {
      title: 'Auto-Protect',
      category: 'Electronics Engineering',
      description: 'Built a smart vehicle safety system with obstacle detection, alcohol sensing, drowsiness monitoring, and theft alerts using Arduino and Python.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Sensors', 'Embedded C', 'Python'],
      featured: false,
    },
    {
      title: 'Contentlyzer for Website',
      category: 'Web Development , Content Creation',
      description: 'Real-time SEO analytics dashboard for content creators with AI-powered insights.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Figma', 'React', 'D3.js', 'Node.js'],
      github: 'https://github.com/Motinath/Contentlyzer-for-Websites',
      demo: 'https://demo.com',
      featured: false,
    },
  ];

  const categories = ['All', 'Content Creation', 'Electronics Engineering', 'Web Development', 'Digital Design'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 glass-light rounded-full text-gray-300 font-medium text-sm border border-white/10 mb-8"
          >
            <Folder className="mr-2" size={14} />
            My Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black text-white mb-6"
          >
            PORTFOLIO
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          >
            A showcase of creative projects spanning content creation, electronics engineering, and digital innovation
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'glass-light text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group glass-light rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    {project.category === 'Content Creation' ? <Play size={18} /> : <ExternalLink size={18} />}
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass-light text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    {project.category === 'Content Creation' ? <Play size={14} className="mr-1" /> : <ExternalLink size={14} className="mr-1" />}
                    {project.category === 'Content Creation' ? 'Watch' : 'Live Demo'}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={14} className="mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}