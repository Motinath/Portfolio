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
      title: 'AWS Academy Graduate-AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'June 2025',
      description: 'Certified in AWS Academy Cloud Foundations with knowledge of core AWS services, cloud security, architecture, and cloud economics.',
      skills: ['Cloud Computing Fundamentals', 'Amazon EC2', 'AWS Management Console ', 'Amazon RDS'],
      verifyUrl: 'https://www.credly.com/badges/7ae6eda1-2a5e-4921-8c02-5a691e6d7ac7/linked_in_profile',
      image: 'AWS.png',
      status: 'Verified'
    },
    {
      title: 'India Semiconductor Workforce Development Program',
      issuer: 'Indian Institute of Science - IISc',
      date: 'June 2025',
      description: 'Completed Level 1 of India Semiconductor Workforce Development Program (ISWDP) by Indian Institute of Science (IISc), Samsung Semiconductor and Synopsys Inc — with 88% in the final evaluation!',
      skills: [' Semiconductor Engineering', ' TCAD', 'MOSFET ', 'Synopsys tools'],
      credentialId: 'ISWDP-2393',
      verifyUrl: 'IISC.jpg',
      image: 'IISC.jpg',
      status: 'Verified'
    },
    {
      title: 'Fundamentals of digital marketing',
      issuer: 'Google Digital Academy',
      date: 'June 2025',
      description: 'Certified by Google in the Fundamentals of Digital Marketing. Gained hands-on knowledge in SEO, content marketing, Google Ads, and analytics.',
      skills: ['Digital Marketing', 'Social Media Marketing', 'SEO', 'Analytics'],
      credentialId: '389192200',
      verifyUrl: 'https://skillshop.exceedlms.com/student/award/MRvNgs5zdfEcU6TcoB35HG4W',
      image: 'DM.png',
      status: 'Verified'
    },
    {
      title: 'Oracle Fusion Cloud Applications ERP Foundations Associate',
      issuer: 'Oracle',
      date: 'June 2025',
      description: 'PCertified by Oracle in Fusion Cloud ERP Foundations — with knowledge of core business modules like finance, procurement, and cloud application workflows.',
      skills: ['Oracle Cloud', 'Cloud Computing', 'Cloud Applications', 'Oracle Applications'],
      credentialId: '101691998OMBPERPCFA1',
      verifyUrl: 'oracle.jpg',
      image: 'oracle.jpg',
      status: 'Verified'
    },
    {
      title: 'Introduction to MongoDB, AI, and Vector Search ',
      issuer: 'ICT Academy',
      date: 'September 2024',
      description: 'ALearned the basics of MongoDB, AI integration, and vector search — focusing on unstructured data handling and smart querying in real-world applications.',
      skills: ['NoSQL Databases', 'MongoDB', 'AI-Powered Query Optimization', 'JSON Data Structures'],
      credentialId: 'MDBjrr2xv58ov',
      verifyUrl: 'https://learn.mongodb.com/c/dhnW0tHbT36cdwPWU5S-LQ',
      image: 'mangoDB.jpg',
      status: 'Verified'
    },
    {
      title: 'Embedded System Design',
      issuer: 'Maven Silicon',
      date: 'June 2024',
      description: 'Learned core concepts of embedded systems including microcontroller architecture, sensor integration, and real-time data handling.',
      skills: ['Microcontroller Programming', 'Embedded C', 'PCB Design'],
      credentialId: 'MS/VIT/2024-25/636',
      verifyUrl: 'Embedded.jpg',
      image: 'Embedded.jpg',
      status: 'Verified'
    },
    {
      title: 'National conference on communication technologies ',
      issuer: 'The Institution of Electronics and Telecommunication Engineers (IETE)',
      date: 'December 2023',
      description: 'Presented "GuardianNet: Security and Privacy Challenges in Communication Networks" at NCCT-2023, focusing on network vulnerabilities and privacy enhancements.',
      skills: ['Network Security', 'Threat Analysis & Mitigation', 'Presentation & Public Speaking', 'Conference Participation'],
      credentialId: '',
      verifyUrl: '',
      image: 'iete.png',
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