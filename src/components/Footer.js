import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">GeoMatrix Solutions</h3>
            <p className="text-sm leading-relaxed">
              Revolutionizing geodetic and construction services across Albania, Kosovo, and North Macedonia through innovation and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#f39c12] transition">Home</a></li>
              <li><a href="#services" className="hover:text-[#f39c12] transition">Services</a></li>
              <li><a href="#about" className="hover:text-[#f39c12] transition">About</a></li>
              <li><a href="#careers" className="hover:text-[#f39c12] transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#f39c12] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-sm mb-4">info@geomatrix-solution.com</p>
            <div className="flex justify-center md:justify-start space-x-5 text-xl">
              <a
                href="https://www.facebook.com/share/15y4e4dXTY/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39c12] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/geomatrix_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39c12] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@geomatrixsolutions?si=F_ifdfeCDqJ4cUf1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39c12] transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 GeoMatrix Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
