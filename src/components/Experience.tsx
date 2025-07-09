import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, TrendingUp, Briefcase } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Prodigy InfoTech',
      location: 'Remote',
      period: 'Dec 2023 - Jan 2024',
      type: 'Internship',
      description: 'Designed and developed interactive web interfaces while learning real-world development workflows.',
      achievements: [
        'Developed responsive pages using HTML5, CSS3, and JavaScript',
        'Optimized site layout for desktop and mobile views',
        'Gained practical experience in Git and version control systems',
        'Gained experience in planning and strategy'
      ],
      color: 'from-white/20 to-white/5'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'New Technology Institutions',
      location: 'Coimbatore, India',
      period: 'Dec 2023 - Dec 2023',
      type: 'Internship',
      description: 'Worked on both frontend and backend development, gaining hands-on experience in designing full stack web applications.',
      achievements: [
        'Explored database operations like insert, update, and fetch using JSON-based storage',
        'Practiced RESTful API integration for sending and receiving data',
        'Developed a login and registration system using HTML, CSS, and JavaScript with form validation',
        'Documented project processes and learnings'
      ],
      color: 'from-white/20 to-white/5'
    },
    {
      title: 'Digital Content Creator',
      company: 'Good Game Nation',
      location: 'Remote',
      period: 'Sep 2022 - Dec 2023',
      type: 'Freelance',
      description: 'Developed creative content and visuals for social platforms to grow engagement and brand visibility.',
      achievements: [
        'Completed 5+ small content creation projects',
        'Built personal brand on social media platforms',
        'Learned client communication and project management',
        'Designed social media graphics using Canva aligned with brand themes'
      ],
      color: 'from-white/20 to-white/5'
    },
    {
      title: 'Freelance Content Creator',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'Sep 2022 - Present',
      type: 'Freelance',
      description: 'Creating content for small businesses and personal projects while building portfolio.',
      achievements: [
        'Completed 5+ small content creation projects',
        'Built personal brand on social media platforms',
        'Learned client communication and project management',
        'Developed skills in photography and video editing'
      ],
      color: 'from-white/20 to-white/5'
    },
  ];
  const stats = [
    { label: 'Experience', value: '4 +', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: TrendingUp },
    { label: 'Certifications', value: '6', icon: Award },
    { label: 'Learning Progress', value: '95%', icon: TrendingUp },
  ];

  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-full text-gray-300 font-medium text-sm border border-white/10 mb-8"
          >
            <Briefcase className="mr-2" size={14} />
            My Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black text-white mb-6"
          >
            EXPERIENCE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            My journey as a fresh graduate building skills in content creation and electronics
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-white/5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20">
                          {experience.type}
                        </span>
                      </div>
                      <h4 className="text-lg text-white font-semibold mb-2">{experience.company}</h4>
                      <div className="flex items-center text-sm text-gray-400 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Learnings & Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                            className="flex items-start text-sm text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-white/50 mr-3 mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}