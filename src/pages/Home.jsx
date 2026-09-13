import React from 'react';
import {useEffect} from 'react';

import './Styles.css';

import resume from '../assets/placeholder.pdf';

import upcomingEvents from '../components/UpcomingEventsData.js';
import ProgrammingLanguages from '../assets/ProgrammingLanguages.js';
import Tools from '../assets/Tools.js';

import Pool from '../components/Pool.jsx';
import ProjectTable from '../components/ProjectTable.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Background from '../components/Background.jsx';

export default function Home() {

  useEffect(() => {
    document.title = "RSCODE- Home"; 
  }, []);

  return (
    <Background>

      <main className="main-content">
        <Navbar/>
        
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
             I have strong skills in designing complex, but still maintainable, systems.
             In work experience and personal projects, I have implemented efficient, well-tested solutions in Python, Java, C++, Verilog, and React in production settings.
            </p>
            
            <Pool title={"Programming Languages"} items={ProgrammingLanguages}/>
            <p className="about-text">
              I take pride in my ability to quickly gain an understanding of unfamiliar tools.
              Throughout work and academic experience, I learned a variety of frameworks, packages, and utilities, some of which I have never heard of before.
              Using tools like PyTorch, LTspice, Quartus, and Firebase, I have produced some of my proudest achievements and most well-liked projects.
            </p>
            <Pool title={"Tools and Frameworks"} items={Tools}/>
          </div>
          
        </section>


        <section id="projects" className="section border-top">
          <h2 className="section-title">Featured Projects</h2>

          {/* title, description, linkText, linkUrl, imageUrl */}
          <ProjectTable projects={upcomingEvents}/>
        </section>


        <section id="contact" className="section border-top contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-desc">
            Feel free to reach out. My inbox is always open.
          </p>
          <a href="mailto:rcs374@cornell.edu" className="btn-primary">
            Send Me an Email
          </a>
        </section>

      <Footer/>

      </main>
    </Background>
  );
}