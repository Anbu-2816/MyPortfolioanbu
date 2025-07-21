import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Music Player with Playlist Management",
    period: "Jun 2024 – Present",
    organization: "Associated with Besant Technologies OMR",
    description: `This Django-based application allows users to upload, organize, and manage playlists of their favorite songs. Features include audio file upload, metadata handling (artist, album), playlist creation, and a sleek player interface with play, pause, skip, and edit/delete functionality.`,
    logo: "/images/Besant.jpg", // Replace with your image path
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.logo} alt={project.organization} className="project-logo" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-period">{project.period}</p>
            <p className="project-org">{project.organization}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
