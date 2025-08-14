import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const floatingElements = [
    { icon: '🚀', delay: 0 },
    { icon: '💻', delay: 0.5 },
    { icon: '🎯', delay: 1 },
    { icon: '✨', delay: 1.5 }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">DEEKSHITHA JANGA</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Information Technology Student & Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Motivated and detail-oriented IT undergraduate with a strong academic foundation 
              and a passion for software development. Seeking opportunities to apply technical 
              skills and contribute to innovative projects.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-placeholder">
              <div className="profile-image">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Deekshitha Janga" 
                  className="profile-photo"
                />
                {/* Fallback emoji if image doesn't load */}
                <span className="profile-fallback">👩‍💻</span>
              </div>
              
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="floating-element"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: element.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {element.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com/deekshithajanga" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/deekshithajanga" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:deekshithareddyj@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+919392659699">
            <FaPhone />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
