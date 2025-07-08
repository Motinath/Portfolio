import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, CheckCircle, GraduationCap } from 'lucide-react';

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'India Semiconductor Workforce Development Program',
      issuer: 'Indian Institute of Science - IISc',
      date: 'June 2025',
      description: 'Comprehensive certification covering video editing, social media strategy, and content planning.',
      skills: ['Video Editing', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
      credentialId: 'GDM-2023-1234',
      verifyUrl: 'https://skillshop.exceedlms.com/student/path/18128',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    },
    {
      title: 'Arduino Programming Fundamentals',
      issuer: 'Arduino Education',
      date: 'October 2023',
      description: 'Hands-on certification in microcontroller programming and IoT development.',
      skills: ['Arduino Programming', 'Circuit Design', 'Sensor Integration', 'IoT Development'],
      credentialId: 'ARD-2023-5678',
      verifyUrl: 'https://www.arduino.cc/education/certification',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'Coursera - University of California',
      date: 'September 2023',
      description: 'Professional certification in user interface and user experience design fundamentals.',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'User Testing'],
      credentialId: 'UC-2023-9012',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/certificate',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    },
    {
      title: 'PCB Design and Manufacturing',
      issuer: 'IIT Madras - NPTEL',
      date: 'August 2023',
      description: 'Advanced certification in printed circuit board design and manufacturing processes.',
      skills: ['PCB Design', 'KiCad', 'Circuit Analysis', 'Manufacturing'],
      credentialId: 'NPTEL-2023-3456',
      verifyUrl: 'https://nptel.ac.in/courses',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    },
    {
      title: 'Social Media Analytics',
      issuer: 'Meta Blueprint',
      date: 'July 2023',
      description: 'Professional certification in social media analytics and performance measurement.',
      skills: ['Analytics', 'Data Interpretation', 'Campaign Optimization', 'ROI Analysis'],
      credentialId: 'META-2023-7890',
      verifyUrl: 'https://www.facebook.com/business/learn',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    },
    {
      title: 'Project Management Fundamentals',
      issuer: 'PMI - Project Management Institute',
      date: 'June 2023',
      description: 'Foundation certification in project management principles and methodologies.',
      skills: ['Project Planning', 'Risk Management', 'Team Leadership', 'Agile Methodology'],
      credentialId: 'PMI-2023-4567',
      verifyUrl: 'https://www.pmi.org/certifications',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Verified'
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-dark-secondary relative overflow-hidden">
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
            className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-full text-gray-300 font-medium text-sm border border-white/10 mb-8"
          >
            <GraduationCap className="mr-2" size={14} />
            Credentials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black text-white mb-6"
          >
            CERTIFICATIONS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Professional certifications that validate my skills and commitment to continuous learning
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white rounded-full text-sm font-bold border border-green-400/50">
                    <CheckCircle size={16} className="mr-1" />
                    {cert.status}
                  </div>
                </div>

                {/* Verify Link */}
                <div className="absolute bottom-4 right-4">
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 text-white">
                    <Award size={24} />
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-white mb-2">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full font-medium border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                  </p>
                </div>
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
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm committed to staying updated with the latest technologies and industry best practices. 
              Currently pursuing additional certifications in AI/ML and advanced electronics design.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg transition-colors duration-300 hover:bg-gray-100"
            >
              <Award className="mr-2" size={20} />
              Discuss My Qualifications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}