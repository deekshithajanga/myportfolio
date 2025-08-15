import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      period: '2023 - 2027',
      degree: 'BTech - Computer Science',
      institution: 'Keshav Memorial Institute of Technology',
      details: 'GPA: 8.56'
    },
    {
      period: '2021 - 2023',
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior Kalasala',
      details: 'Percentage: 97.6%'
    },
    {
      period: '2020 - 2021',
      degree: 'SSC (High School)',
      institution: 'Sri Chaitanya High School',
      details: 'GPA: 10.0'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a motivated and detail-oriented Information Technology undergraduate with a strong 
              academic foundation and a passion for software development. I love creating innovative 
              solutions and learning new technologies.
            </p>
            <p>
              My journey in technology started with a curiosity about how things work, and it has 
              evolved into a passion for building applications that solve real-world problems. I'm 
              always eager to take on new challenges and expand my skill set.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or collaborating with fellow developers on exciting projects.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Education Timeline</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <div className="timeline-period">{edu.period}</div>
                  <h4>{edu.degree}</h4>
                  <p className="timeline-institution">{edu.institution}</p>
                  <p className="timeline-details">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
