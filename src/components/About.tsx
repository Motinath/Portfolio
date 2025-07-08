import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Cpu, Video, Palette, BookOpen, Award } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Content Creation',
      icon: <Video className="w-5 h-5" />,
      skills: ['Digital Marketing', 'Social Media Content', 'Web Analytics', 'SEO'],
      percentage: 85,
    },
    {
      category: 'Electronics',
      icon: <Cpu className="w-5 h-5" />,
      skills: ['Circuit Design', 'Arduino Programming', 'PCB Design', 'Microcontrollers'],
      percentage: 80,
    },
    {
      category: 'Web Development',
      icon: <Palette className="w-5 h-5" />,
      skills: ['UI/UX Design', 'Frontend', 'Backend', 'Responsive Design'],
      percentage: 75,
    },
    {
      category: 'Innovation',
      icon: <Zap className="w-5 h-5" />,
      skills: ['Problem Solving', 'Creative Thinking', 'Project Management', 'Team Work'],
      percentage: 90,
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-dark-secondary">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 glass-light rounded-full text-gray-300 font-medium text-sm border border-white/10 mb-8"
          >
            <BookOpen className="mr-2" size={14} />
            About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black mb-6 text-white"
          >
            WHO I AM
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base text-gray-300 leading-relaxed"
              >
                As a B.Tech student in Electronics and Communication Engineering, I am passionate about web development, digital marketing, and creative problem-solving. My experiences include working on innovative projects and internships that have strengthened my skills in programming, teamwork, and adapting to new challenges.
                I enjoy exploring emerging technologies and finding ways to make a positive impact through creative and practical solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base text-gray-300 leading-relaxed"
              >
                During my studies, I've worked on various projects that combine creativity with technology. 
                I'm eager to learn, grow, and contribute to innovative projects while building my expertise 
                in content creation and electronics design.
              </motion.p>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="glass-light rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-white/10 text-white mr-4">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Education
                </h3>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white">
                  B.Tech Electronics & Communication Engineering
                </h4>
                <p className="text-gray-400 mt-1">
                  Vellore Institute of Technology AP • CGPA: 8/10
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                }}
                className="glass-light rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-white/10 text-white mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                      className="bg-white h-2 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, skillIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}