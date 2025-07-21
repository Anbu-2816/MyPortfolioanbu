import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">Anbarasi S</h2>
          <p >
            Backend Developer | Clean Code | Real-world Solutions
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
           <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaEnvelope className="footer-icon" /> anbarasisrihari2@gmail.com</p>
          <p><FaPhoneAlt className="footer-icon" /> +91 7339592998</p>
          <p><FaMapMarkerAlt className="footer-icon" /> Kallakurichi, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anbarasi S. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
