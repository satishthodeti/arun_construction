import React from 'react';
import './index.css';
import projectData from '../Images/projectImages';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Our Projects</h2>
    <div className="project-grid">
      {projectData.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.imageUrl} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
