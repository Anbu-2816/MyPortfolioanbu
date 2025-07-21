import React from "react";

const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js"];
  const backendSkills = ["Python", "Django"];
  const databaseSkills = ["MySQL"];
  const tools = ["Git", "GitHub", "VS Code", "Postman"];

  return (
    <section id="skills" className="section">
        <div style={{ textAlign: 'center' }}>
 <h2 className="section-heading" style={{ textAlign: 'center' }}>Technical Skills</h2>
        </div>
      <p className="section-subtext">
        I have a well-rounded skillset in full stack development. Below are the technologies and tools I work with:
      </p>

      <div className="skills-category">
        <h3 className="skills-title">Database</h3>
        <ul className="skills-list">
          {databaseSkills.map((skill, index) => (
            <li key={`database-${index}`} className="skill">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-category">
        <h3 className="skills-title">Backend Development</h3>
        <ul className="skills-list">
          {backendSkills.map((skill, index) => (
            <li key={`backend-${index}`} className="skill">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-category">
        <h3 className="skills-title">Frontend Development</h3>
        <ul className="skills-list">
          {frontendSkills.map((skill, index) => (
            <li key={`frontend-${index}`} className="skill">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-category">
        <h3 className="skills-title">Tools & Platforms</h3>
        <ul className="skills-list">
          {tools.map((skill, index) => (
            <li key={`tool-${index}`} className="skill">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

