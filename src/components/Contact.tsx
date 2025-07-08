import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'motinath.rajendran@gmail.com',
      href: 'mailto:motinath.rajendran@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8778744043',
      href: 'tel:+918778744043',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Salem, India',
      href: 'https://maps.google.com/?q=Salem,India',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/motinath',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/motinath',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/motinath',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/motinath_',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:motinath.rajendran@gmail.com',
    }
    
  ];

  return (
    <section id="contact" className="py-32 bg-dark-secondary relative overflow-hidden">
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
            <MessageCircle className="mr-2" size={14} />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl lg:text-5xl font-black text-white mb-6"
          >
            LET'S TALK
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Whether you need content creation, electronics engineering solutions, 
                or digital innovation consulting, I'm here to help bring your vision to reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group flex items-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-white/10 text-white mr-6 group-hover:bg-white/20 transition-all duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {info.label}
                    </h4>
                    <p className="text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">
                Follow My Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200 border border-white/10 hover:border-white/20"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
            <h3 className="text-2xl font-bold text-white mb-6">
              Start Your Project
            </h3>
            
            <form
              onSubmit={handleSubmit(async (data) => {
              try {
                await emailjs.send(
                'service_k5oxqdq',
                'template_3eumn9k',
                {
                  from_name: data.name,
                  from_email: data.email,
                  subject: data.subject,
                  message: data.message,
                },
                'yeIoRcU5kDOOn6p13'
                );
                alert("Thank you for your message! I'll get back to you soon.");
                reset();
              } catch (error) {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS error:', error);
              }
              })}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                {errors.name.message}
                </p>
              )}
              </div>

              {/* Email Field */}
              <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
                })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
                </p>
              )}
              </div>

              {/* Subject Field */}
              <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                placeholder="Project Subject"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">
                {errors.subject.message}
                </p>
              )}
              </div>

              {/* Message Field */}
              <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                rows={5}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                placeholder="Tell me about your project, goals, and how I can help..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
                </p>
              )}
              </div>

              {/* Submit Button */}
              <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 disabled:opacity-60"
              disabled={isSubmitting}
              >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                <Send className="mr-2" size={18} />
                Send Message
                </>
              )}
              </button>
            </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
}