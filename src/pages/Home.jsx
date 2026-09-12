import React from 'react';

import './Home.css';

import upcomingEvents from '../components/UpcomingEventsData.js';
import resume from '../assets/placeholder.pdf';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/background.png';
import Pool from '../components/Pool.jsx';
import ProjectTable from '../components/ProjectTable.jsx';


export default function App() {

  return (
    <div className="app-container">
      
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>

      <Navbar />

      <main className="main-content">
        
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Reece Shiraishi</h1>
          <p className="hero-desc">
            I'm Reece Shiraishi, a passionate all-around developer. My skills range from bare-metal oscilloscope work, to web development, to everything in between. 
          </p>
          <div className="hero-buttons">
            <a href={resume} className="btn-primary">Resume</a>
            <a href="https://github.com/rscode999" className="btn-secondary">GitHub</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section border-top">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <p className="about-text">
              I have a strong background in web development, working primarily with JavaScript, React, and modern build tools like Vite. I love turning complex problems into simple, beautiful, and intuitive interfaces. When I'm not coding, you can find me exploring open-source projects or learning new design patterns.
            </p>
            
            <Pool title={"Hello"} items={["hello", "im so cuet"]}/>
          </div>
        </section>


        <section id="projects" className="section border-top">
          <h2 className="section-title">Featured Projects</h2>

          {/* title, description, linkText, linkUrl, imageUrl */}
          <ProjectTable projects={upcomingEvents}/>
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