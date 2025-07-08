import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Cpu, Palette, Zap, Camera, Code } from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Digital Marketing',
      description: 'Crafting data-driven digital campaigns that amplify brand reach and drive real engagement.',
      features: ['SEO', 'Web Analytics', 'Web Optimization'],
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Content Creation',
      description: 'Engaging social media content, photography, and brand storytelling across platforms.',
      features: ['Social Media Content', 'Photography', 'Brand Strategy', 'Content Planning'],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Electronics Design',
      description: 'Custom circuit design, PCB layout, and embedded systems development.',
      features: ['Circuit Design', 'PCB Layout', 'Embedded Systems', 'IoT Solutions'],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Digital Design',
      description: 'UI/UX design, 3D modeling, and visual identity creation for digital products.',
      features: ['UI/UX Design', '3D Modeling', 'Branding', 'Prototyping'],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and responsive design.',
      features: ['React Development', 'Responsive Design', 'API Integration', 'Performance Optimization'],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation Consulting',
      description: 'Strategic guidance on digital transformation and technology integration.',
      features: ['Digital Strategy', 'Tech Integration', 'Process Automation', 'Innovation Workshops'],
    },
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
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
            <Zap className="mr-2" size={14} />
            What I Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black text-white mb-6"
          >
            SERVICES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions that blend creativity with technical expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-light rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-white/10 text-white mb-4 group-hover:bg-white/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 mr-3" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <Zap className="mr-2" size={18} />
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}