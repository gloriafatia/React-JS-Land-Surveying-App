import React, { useState } from 'react';

const Nav = ({ bannerRef, servicesRef, aboutRef, careersRef, footerRef }) => {
  // State for handling mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to the corresponding section onClick
  const scrollToSection = (section) => {
    section.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" className="h-8" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar__right hidden md:flex space-x-6">
            <button className="navbar__link text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(bannerRef)}>Home</button>
            <button className="navbar__link text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(servicesRef)}>Services</button>
            <button className="navbar__link text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(aboutRef)}>About</button>
            <button className="navbar__link text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(careersRef)}>Careers</button>
            <button className="navbar__link text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(footerRef)}>Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 hover:text-blue-500" 
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
        <div className={`md:hidden mt-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <button className="block w-full text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(bannerRef)}>Home</button>
          <button className="block w-full text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(servicesRef)}>Services</button>
          <button className="block w-full text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(aboutRef)}>About</button>
          <button className="block w-full text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(careersRef)}>Careers</button>
          <button className="block w-full text-gray-800 hover:text-blue-500" onClick={() => scrollToSection(footerRef)}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
