  import React from 'react';

  const Nav = ({ bannerRef, servicesRef, aboutRef, careersRef, footerRef }) => {
    // Scroll to the corresponding section onClick
    const scrollToSection = (section) => {
      section.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar__container">
            <div></div>
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src="/images/logo.png" alt="logo" />
              </div>
            </ul>
            <ul className="navbar__right">
              <li>
                <button className="navbar__link" onClick={() => scrollToSection(bannerRef)}>Home</button>
              </li>
              <li>
                <button className="navbar__link" onClick={() => scrollToSection(servicesRef)}>Services</button>
              </li>
              <li>
                <button className="navbar__link" onClick={() => scrollToSection(aboutRef)}>About</button>
              </li>
              <li>
                <button className="navbar__link" onClick={() => scrollToSection(careersRef)}>Careers</button>
              </li>
              <li>
                <button className="navbar__link" onClick={() => scrollToSection(footerRef)}>Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  export default Nav;
