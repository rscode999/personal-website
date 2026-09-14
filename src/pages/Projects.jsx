import { useState, useEffect } from 'react';

import './Projects.css';

import Background from '../components/Background.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import CastAutograd from '../assets/cast-autograd.png';
import FastLinkedList from '../assets/fast-linked-list.png';
import GeodataWebsite from '../assets/geodata-website.png';
import StepperFx from '../assets/stepperfx.png';
import TheftProtDevice from '../assets/theft-prot-device.jpg';
import SlidingContainer from '../components/SlidingContainer.jsx';
import Pool from '../components/Pool.jsx';

export default function Projects() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = "RSCODE- Projects";
    });

    return (
        <Background>
            <main className="main-content">
                <Navbar/>
                    {/* Marks the top of the page */}
                    <section id='top'></section> 

                    <h1 className='header'>Projects</h1>

                    <section id='cast' className='projects-section'>
                        <h2 className="projects-title">CAST</h2>

                        <img src={CastAutograd}/>

                        <p className="projects-desc">
                            The Compartmentalized Autograd System with Tensors (CAST) is the successor to the C++ CNet neural network framework.
                            Instead of creating and using networks implicitly, as with PyTorch, users add and compute directly through the network object.
                            Doing everything through the network keeps the network creation process simple and intuitive.
                        </p>
                        <p className="projects-desc">
                            Unlike its predecessor CNet, CAST allows for branching structures within networks.
                            Several modern network architectures have layers receiving input from several upstream layers at the same time,
                            an architecture that CNet did not support.
                        </p>
                        <p className="projects-desc">
                            CAST's compartmentalized, modular design and simple interface makes it perfect for quick creation and deployment
                            of neural networks.
                        </p>

                        <div className="projects-buttons">
                            <a href="https://github.com/rscode999/cast-autograd" className='projects-buttons-link'>GitHub (CAST)</a>
                            <a href="https://github.com/rscode999/cnet" className='projects-buttons-link'>GitHub (CNet)</a>
                        </div>
                    </section>

                    <section id='embedded-final-proj' className='projects-section'>
                        <SlidingContainer direction='left'>
                            <h2 className="projects-title">Embedded Theft Protection Device</h2>

                            <img src={TheftProtDevice}/>
        
                            <p className="projects-desc">
                                This device runs on a FRDM-KL46Z board, equipped with an ARM Cortex processor.
                                It uses a buzzer, ultrasound sensor, accelerometer, and Bluetooth transmitter.
                                With the help of 2 others, I implemented this device in C for a class final project.
                            </p>
                            <p className="projects-desc">
                                When a potential thief approaches the device, the buzzer emits a warning sound.
                                If the device is picked up, or someone gets too close, the buzzer goes into alert.
                                The accelerometer tracks the approximate position of the device, which is transmitted
                                to a host computer through Bluetooth.                            
                            </p>
                            <p className="projects-desc">
                                The control logic uses a custom round-robin scheduler with custom libraries for each 
                                of the peripheral devices. Operating with just 32KB of total RAM, the control libraries 
                                are written to be concise and memory-efficient.
                            </p>

                            <div className="projects-buttons">
                                <a href="https://github.com/rscode999/embedded-final-project" className='projects-buttons-link'>Source Code</a>
                            </div>
                        </SlidingContainer>
                    </section>

                    <section id='geodata-website' className='projects-section'>
                        <SlidingContainer direction='right'>
                            <h2 className="projects-title">GeoData Website Improvements</h2>

                            <img src={GeodataWebsite}/>
        
                            <p className="projects-desc">
                                As part of the GeoData project team, I improved the team's React/Vite.js website.
                                With website subscription fees becoming a concern, I was tasked with creating a replacement.
                            </p>
                            <p className="projects-desc">
                                I was originally tasked to extend the "Our Work" subpage.
                                Purely out of interest, I brought the site to deployable condition,
                                adding 14 new subpages, CSS animations, and a unified style. 
                                Although the team has since moved to a different website, the site proved to the team that hosting 
                                its own website is possible and excellent.
                            </p>

                            <div className="projects-buttons">
                                <a href="https://github.com/rscode999/geodata-website-temp/tree/our-work-tabs" className='projects-buttons-link'>GitHub</a>
                            </div>
                        </SlidingContainer>
                    </section>

                    <section id='stepperfx' className='projects-section'>
                        <SlidingContainer direction='left'>
                            <h2 className="projects-title">StepperFX</h2>

                            <img src={StepperFx}/>
        
                            <p className="projects-desc">
                                The most popular Vigenere-based ciphers succumb to the Kasiski analysis, an algorithm published over 100 years ago.
                                The Stepper algorithm increases the key's strength without increasing the number of characters.
                                A standard 150-character Vigenere key repeats every 150 characters. The Stepper algorithm uses the same 150 characters to get a period of over 6.1 billion characters.
                                Stepper's long key period makes it highly resistant to the Kasiski analysis and other key-period attacks.
                            </p>
                            <p className="projects-desc">
                                StepperFX provides a multithreaded high-performance JavaFX GUI application for Stepper operations.
                                It can run with arbitrarily many threads, processing over 100 million characters in less than 15 seconds.
                                The app's drab color scheme helps it stay hidden from unwanted attention.
                            </p>

                            <div className="projects-buttons">
                                <a href="https://github.com/rscode999/stepperfx" className='projects-buttons-link'>GitHub</a>
                            </div>
                        </SlidingContainer>
                    </section>


                    <section id='utilities' className='projects-section'>
                        <SlidingContainer direction='right'>
                            <h2 className="projects-title">Data Structures, Reimagined</h2>

                            <img src={FastLinkedList}/>
        
                            <p className="projects-desc">
                                Implemented in C++, the Data Structures Reimagined series consists
                                of a space-efficient resizeable 2d array, memory-saving integer class with arbitrarily many digits,
                                and a linked list allowing for iteration in linear time.
                            </p>

                            <div className="projects-buttons">
                                <a href="https://github.com/rscode999/utilities" className='projects-buttons-link'>GitHub</a>
                            </div>
                        </SlidingContainer>
                    </section>

                <Footer/>
            </main>
        </Background>
    );
}