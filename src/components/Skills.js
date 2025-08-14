import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Java', 'Python', 'C++']
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MongoDB', 'SQLite', 'SQL']
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'PipeDream', 'MCP', 'Cursor', 'AWS', 'Canva', 'MS Excel']
    }
  ];

  const learningItems = [
    {
      title: 'Nxtwave CCBP',
      description: 'Web Technologies - HTML, CSS, JavaScript, React.js, Node.js, Express.js',
      date: 'September 2024',
      icon: '📚'
    },
    {
      title: 'Certifications',
      description: [
        'Introduction to Databases',
        'SQL',
        'Python Programming Foundation'
      ],
      icon: '🏆'
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

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.span>
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
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Continuous Learning</h3>
          <div className="learning-cards">
            {learningItems.map((item, index) => (
              <motion.div
                key={index}
                className="learning-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="learning-icon">{item.icon}</div>
                <div className="learning-content">
                  <h4>{item.title}</h4>
                  {Array.isArray(item.description) ? (
                    <div className="certification-list">
                      {item.description.map((cert, certIndex) => (
                        <div key={certIndex} className="certification-item">
                          • {cert}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>{item.description}</p>
                  )}
                  {item.date && <span className="learning-date">{item.date}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
