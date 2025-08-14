import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Git', level: 80 },
        { name: 'PipeDream', level: 75 },
        { name: 'MCP', level: 70 },
        { name: 'Cursor', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'Canva', level: 80 },
        { name: 'MS Excel', level: 85 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'SQLite', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills & Expertise</h2>
          <p>My technical skills and continuous learning journey</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="learning-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>Continuous Learning</h3>
          <div className="learning-grid">
            <div className="learning-item">
              <h4>Nxtwave CCBP</h4>
              <p>Web Technologies - HTML, CSS, JavaScript, React.js, Node.js, Express.js</p>
              <span className="learning-date">September 2024</span>
            </div>
            <div className="learning-item">
              <h4>Certifications</h4>
              <p>Introduction to Databases, SQL, Python Programming Foundation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
