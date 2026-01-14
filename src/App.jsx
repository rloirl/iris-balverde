import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div style={{ backgroundColor: '#FAF1E8', height: '64px' }} className="md:h-20"></div>
      <About />
      <Works />
      <Services />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
