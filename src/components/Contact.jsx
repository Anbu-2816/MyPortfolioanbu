import React from 'react';
import './Contact.css'; // make sure to style accordingly or inline
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-heading">Connect With Me</h2>

      

        <div className="contact-info">
          <p><strong>Email:</strong> anbarasisrihari2@gmail.com</p>
          <p><strong>Phone:</strong> +91 7339592998</p>
          <p><strong>Location:</strong> Kallakurichi, Tamil Nadu, India</p>
        </div>


<div className="social-links">
  <a href="https://linkedin.com/in/rajansamuel" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={28} />
  </a>
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <FaGithub size={28} />
  </a>

  <a href="https://instagram.com/rajansamuel" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={28} />
  </a>
</div>


        {/* Optional Contact Form */}
       <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form> 
      </div>
    </section>
  );
};

export default Contact;
