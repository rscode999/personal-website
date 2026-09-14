import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import resume from '../assets/shiraishi_reece_resume.pdf';

import ProgrammingLanguages from '../assets/ProgrammingLanguages.js';
import Tools from '../assets/Tools.js';

import Pool from '../components/Pool.jsx';
import ProjectTable from '../components/ProjectTable.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Background from '../components/Background.jsx';
import RevealContainer from '../components/RevealContainer.jsx';


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
            I'm Reece Shiraishi, a passionate all-around engineer and developer.
            I am working towards a major in Electrical and Computer Engineering with minors in Computer Science and AI.
            My skills range from bare-metal oscilloscope work, to web development, to everything in between. 
          </p>
          <div className="hero-buttons">
            <a href={resume} className="btn-primary">Resume</a>
            <a href="https://github.com/rscode999" className="btn-secondary">GitHub</a>
          </div>
        </section>


        <section id="about" className="section border-top">
          <RevealContainer>
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
          </RevealContainer>
          
        </section>


        <section id="projects" className="section border-top">
          <RevealContainer delay={200}>
            <h2 className="section-title">Projects</h2>

            <p className="about-text">
              I have a collection of projects that I worked on, for classwork and outside of school.
            </p>
            <br/>
            <a href="/projects#top" className="btn-primary">Featured Projects</a>
          </RevealContainer>
        </section>

        <section id="contact" className="section border-top contact-section">
          <RevealContainer delay={200}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-desc">
              Feel free to reach out. My inbox is always open.
            </p>
            <a href="mailto:rcs374@cornell.edu" className="btn-primary">
              Send Me an Email
            </a>
          </RevealContainer>
        </section>

      <Footer/>

      </main>
    </Background>
  );
}