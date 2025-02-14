import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Portfolio() {
  // State management for various portfolio features
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Fetch testimonials
  useEffect(() => {
    axios.get('/api/testimonials')
      .then(response => setTestimonials(response.data))
      .catch(error => console.error("Error fetching testimonials:", error));
  }, []);

  // Form handling
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Error sending message"));
  };

  // Project filtering
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Modal handling
  const openProjectModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <Router>
      {/* Main container with semantic structure */}
      <div className="portfolio-container">
        
        {/* Navigation Section */}
        <nav className="main-nav" aria-label="Main navigation">
          <div className="nav-brand">
            <Link to="/" className="logo-link">DevPortfolio</Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="portfolio-hero" role="banner">
          <div className="hero-content">
            <h1 className="hero-title">Full Stack Developer Portfolio</h1>
            <p className="hero-subtitle">Showcasing MERN stack expertise and web development projects</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => navigate('/projects')}>
                View Projects
              </button>
              <button className="cta-secondary" onClick={() => navigate('/contact')}>
                Hire Me
              </button>
            </div>
          </div>
        </header>

        {/* Projects Grid Section */}
        <section className="projects-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          
          {/* Filter Controls */}
          <div className="filter-controls">
            {['all', 'mern', 'react', 'node'].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="loading-spinner" aria-live="polite">Loading projects...</div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.excerpt}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <button 
                      className="view-details-btn"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="skills-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                {['React', 'Redux', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <progress className="skill-progress" value="90" max="100" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skill-list">
                {['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL'].map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <progress className="skill-progress" value="85" max="100" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="section-title">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>

        {/* Testimonials Section */}
        <aside className="testimonials-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <footer className="testimonial-author">
                  — {testimonial.author}, <cite>{testimonial.company}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </aside>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" role="dialog" aria-labelledby="modal-heading">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                &times;
              </button>
              <h3 id="modal-heading">{selectedProject.title}</h3>
              <div className="modal-body">
                <img 
                  src={selectedProject.fullImage} 
                  alt={selectedProject.title} 
                  className="modal-image"
                />
                <div className="modal-details">
                  <p>{selectedProject.fullDescription}</p>
                  <div className="project-metadata">
                    <p><strong>Client:</strong> {selectedProject.client}</p>
                    <p><strong>Duration:</strong> {selectedProject.duration}</p>
                    <p><strong>Technologies:</strong></p>
                    <ul className="tech-list">
                      {selectedProject.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={selectedProject.liveUrl} 
                    className="live-demo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <footer className="main-footer" role="contentinfo">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Navigation</h4>
              <nav aria-label="Footer navigation">
                <ul>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/skills">Skills</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul className="social-links">
                <li><a href="https://github.com" aria-label="GitHub profile">GitHub</a></li>
                <li><a href="https://linkedin.com" aria-label="LinkedIn profile">LinkedIn</a></li>
                <li><a href="https://twitter.com" aria-label="Twitter profile">Twitter</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <p className="copyright">&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Router Configuration */}
      <Route path="/projects" exact render={() => <ProjectsPage projects={projects} />} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/contact" component={ContactPage} />
    </Router>
  );
}

// Additional Components
const ProjectsPage = ({ projects }) => (
  <div className="page-container">
    <h2>All Projects</h2>
    {/* Project listing implementation */}
  </div>
);

const SkillsPage = () => (
  <div className="page-container">
    <h2>Detailed Skills</h2>
    {/* Expanded skills implementation */}
  </div>
);

const ContactPage = () => (
  <div className="page-container">
    <h2>Contact Form</h2>
    {/* Alternative contact implementation */}
  </div>
);

export default Portfolio;