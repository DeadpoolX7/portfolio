import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <section id="Home">
        <Hero />
      </section>
      <section id="Projects">
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
