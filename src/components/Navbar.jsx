import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b-2" style={{ backgroundColor: '#FFFACD', borderColor: '#922B2E' }}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Projects Link - Left */}
          <button
            onClick={() => scrollToSection('works')}
            className="font-dm-sans text-sm font-normal transition-colors duration-200"
            style={{ color: '#922B2E' }}
          >
            projects
          </button>

          {/* Name - Center */}
          <h1 
            className="font-libre text-base md:text-lg font-normal text-pink-400 cursor-pointer italic"
            onClick={() => scrollToSection('home')}
          >
            Iris Balverde
          </h1>

          {/* Skills Link - Right */}
          <button
            onClick={() => scrollToSection('experience')}
            className="font-dm-sans text-sm font-normal transition-colors duration-200"
            style={{ color: '#922B2E' }}
          >
            skills
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
