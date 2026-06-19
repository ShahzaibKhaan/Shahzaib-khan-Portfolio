import React from 'react';
import "./App.css";

// Components import karna
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Agar aapne aur sections banaye hain jaise footer, services, etc.
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;