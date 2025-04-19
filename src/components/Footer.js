import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/15y4e4dXTY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/geomatrix_solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@geomatrixsolutions?si=F_ifdfeCDqJ4cUf1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>info@geomatrix-solution.com</p>
          <p>&copy; 2025 GeoMatrix Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
