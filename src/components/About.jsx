import React from "react";
import "./About.css";
import profileImg from "../assets/Anbarasi.jpg"; 

const About = () => {
  return (
    <section id="about" className="section slide-left about-section">
      <h2 className="highlight">ABOUT ME</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Anbarasi" />
        </div>
        <div className="about-text">
          <p>
            I am currently working as a <strong>Python Developer at iSpark Learning Solutions</strong>, where I focus on developing scalable, efficient, and maintainable backend systems using Python. My responsibilities include designing APIs, implementing server-side logic, and integrating third-party services to enhance platform functionality.
          </p>
          <p>
            Alongside my backend expertise, I have a solid understanding of frontend technologies like <strong>HTML, CSS, JavaScript, and React.js</strong>. This allows me to contribute effectively to full-stack projects, ensuring smooth communication between client and server while delivering user-friendly interfaces.
          </p>
          <p>
            I also have practical experience with <strong>MySQL</strong>, designing and managing relational databases, writing optimized queries, and ensuring data integrity. My full-stack skill set helps me build complete and integrated solutions.
          </p>
          <p>
            I am passionate about <strong>coding, solving real-world problems, and learning emerging technologies</strong>. I believe in clean code, collaboration, and continuous improvement. My focus is on delivering impactful, technically sound, and business-aligned solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

