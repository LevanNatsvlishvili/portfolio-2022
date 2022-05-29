import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Welcome from './Welcome';

function Home() {
  return (
    <div className="relative z-index-1">
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
