import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaFlipboard } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Context-Aware Task Automation using MCP',
      shortDescription: 'Intelligent automation systems using Cursor and Pipedream',
      fullDescription: 'Created intelligent automation systems using Cursor (MCP host) and Pipedream (MCP server) to execute real-world tasks from a single prompt. Implemented use cases like automated LinkedIn post publishing, email sending, and a prompt-based Railway Information System.',
      technologies: ['MCP', 'Cursor', 'Pipedream', 'Automation', 'AI'],
      category: 'automation',
      github: null,
      demo: null,
      image: '🤖'
    },
    {
      id: 2,
      title: 'IoT-Based Voice Enabled Automation',
      shortDescription: 'Smart locking system with voice and facial recognition',
      fullDescription: 'Built a smart locking system that uses voice and facial recognition for secure authentication. Integrated IoT hardware with AI-based authentication models for home automation.',
      technologies: ['IoT', 'Python', 'MERN', 'Voice Recognition', 'Arduino'],
      category: 'iot',
      github: null,
      demo: null,
      image: '🏠'
    },
    {
      id: 3,
      title: 'Asset Management System (AMS)',
      shortDescription: 'Web-based system for managing institutional assets',
      fullDescription: 'Developed a web-based system for managing institutional assets with features for admin, HOD, and user roles, including QR-based tracking, approval flows, and asset history.',
      technologies: ['React.js', 'Bootstrap', 'Node.js', 'MongoDB', 'QR Code'],
      category: 'web',
      github: null,
      demo: null,
      image: '📱'
    },
    {
      id: 4,
      title: 'Court Data Fetcher & Mini-Dashboard',
      shortDescription: 'Full-stack web application for Delhi High Court data',
      fullDescription: 'Built a full-stack web application for Delhi High Court case data extraction with real-time captcha integration and comprehensive database logging. Implemented automated web scraping system to parse case metadata, party information, and court orders.',
      technologies: ['FastAPI', 'Python', 'SQLite', 'Bootstrap', 'Web Scraping'],
      category: 'web',
      github: 'https://github.com/deekshithajanga/court_data_fetcher',
      demo: null,
      image: '⚖️'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'iot', label: 'IoT & Hardware' },
    { key: 'automation', label: 'Automation' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const toggleCard = (projectId) => {
    setFlippedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Projects</h2>
          <p>Showcasing my work and technical expertise</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-container"
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`project-card ${flippedCards[project.id] ? 'flipped' : ''}`}
                  onClick={() => toggleCard(project.id)}
                >
                  {/* Front Side */}
                  <div className="project-card-front">
                    <div className="project-image">
                      <span className="project-emoji">{project.image}</span>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.shortDescription}</p>
                      <div className="project-technologies">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag more">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                      <div className="flip-hint">
                        <FaFlipboard /> Click to see more
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="project-card-back">
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.fullDescription}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub /> GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>
                      <div className="flip-hint">
                        <FaFlipboard /> Click to flip back
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
