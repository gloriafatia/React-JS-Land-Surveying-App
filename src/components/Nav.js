import React, { useState } from "react";

const Nav = ({ bannerRef, servicesRef, aboutRef, careersRef, footerRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-transparent shadow-lg border-b border-white/20">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="navbar__left pl-4 sm:pl-6 md:pl-8 lg:pl-10">
          <div className="navbar__left-logo">
            <img src="/images/logo.png" alt="logo" className="h-8" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar__right hidden md:flex space-x-4 items-stretch h-full">
          {[
            { label: "Home", ref: bannerRef },
            { label: "Services", ref: servicesRef },
            { label: "About", ref: aboutRef },
            { label: "Careers", ref: careersRef },
            { label: "Contact Us", ref: footerRef },
          ].map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded transition text-black hover:text-[#f27f32] border-b border-transparent hover:border-gray-300"
              onClick={() => scrollToSection(item.ref)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-5">
          <button
            className="text-black hover:text-{#f27f32}"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
      <div
        className={`md:hidden mt-4 space-y-2 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        {[
          { label: "Home", ref: bannerRef },
          { label: "Services", ref: servicesRef },
          { label: "About", ref: aboutRef },
          { label: "Careers", ref: careersRef },
          { label: "Contact Us", ref: footerRef },
        ].map((item, index) => (
          <button
            key={index}
            className="w-full text-left px-4 py-3 rounded transition text-black hover:text-[#f27f32] hover:outline-none hover:ring-4 hover:ring-[#f27f32] border-bt hover:border-gray-300"
            onClick={() => {
              scrollToSection(item.ref);
              setIsMobileMenuOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
