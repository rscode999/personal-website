import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/background.png';
import './Home.css';

export default function App() {
  return (
    <div className="app-container">
      
      {/* Background Image Layer */}
      <div 
        className="bg-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-overlay" />
      </div>

      <Navbar />

      <main className="main-content">
        
        {/* Hero Section */}
        <section className="hero-section">
          <span className="hero-tag">Frontend Developer & Designer</span>
          <h1 className="hero-title">Building digital experiences that matter.</h1>
          <p className="hero-desc">
            I'm Alex, a passionate developer focused on building clean, responsive, and user-centric web applications using modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section border-top">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <p className="about-text">
              I have a strong background in web development, working primarily with JavaScript, React, and modern build tools like Vite. I love turning complex problems into simple, beautiful, and intuitive interfaces. When I'm not coding, you can find me exploring open-source projects or learning new design patterns.
            </p>
            <div className="skills-card">
              <h3>Core Skills</h3>
              <div className="skills-flex">
                {['JavaScript (ES6+)', 'React', 'Vite', 'HTML5 / CSS3', 'Git & GitHub', 'REST APIs', 'UI/UX Design'].map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section border-top">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[
              { title: "E-Commerce Dashboard", desc: "A sleek analytics interface built for online store owners using React.", tag: "React" },
              { title: "Task Management App", desc: "A productivity tool featuring drag-and-drop mechanics and real-time state updates.", tag: "Vite" },
              { title: "Weather Forecast PWA", desc: "A responsive weather application leveraging external APIs with location tracking.", tag: "CSS3" }
            ].map((project, idx) => (
              <div key={idx} className="project-card">
                <div>
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
                <a href="#" className="project-link">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section border-top contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-desc">
            Have a project in mind or just want to say hi? Feel free to reach out. My inbox is always open.
          </p>
          <a href="mailto:alex.dev@example.com" className="btn-primary">
            Send Me an Email
          </a>
        </section>

      </main>

      <Footer />
      
    </div>
  );
}