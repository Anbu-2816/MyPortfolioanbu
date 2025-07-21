import React from "react";
import './Experience.css';

const experiences = [
  {
    company: "iSpark Learning Solutions",
    role: "Python Developer",
    duration: "May 2025 – Present",
    location: "Chennai, Tamil Nadu (On-site)",
    description: "Working on full-stack development using Python, Django, React.js, and JavaScript. Contributing to real-world projects in a collaborative, growth-focused environment.",
    logo: "/images/logo-dark.png"
  },
  {
    company: "Besant Technologies OMR",
    role: "Python Developer Intern",
    duration: "Sep 2024 – May 2025",
    location: "Hybrid",
    description: "Completed a hands-on Python internship focused on Django, data analysis, and automation. Gained experience in team projects, clean coding practices, and agile methodology.",
    logo: "/images/Besant.jpg"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-heading">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration} • {exp.location}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
