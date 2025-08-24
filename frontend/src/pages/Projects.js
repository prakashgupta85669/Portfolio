import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Medical-Locator",
      description: "This is helpful to customer to find nearby medical shop where the medicine is available which he needs.",
      link: "https://github.com/prakashgupta85669/Projects"
    },
    // {
    //   title: "E-commerce Platform",
    //   description: "A full-stack e-commerce website with product management, cart, payment gateway, and admin panel.",
    //   link: "https://github.com/yourusername/e-commerce-platform"
    // },
    // {
    //   title: "Weather App",
    //   description: "A React app fetching real-time weather data using OpenWeatherMap API with clean UI and location search.",
    //   link: "https://github.com/yourusername/weather-app"
    // },
    {
      title: "Portfolio Website",
      description: "This personal MERN portfolio showcasing my projects, skills, and contact information for opportunities.",
      link: "https://github.com/yourusername/mern-portfolio"
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
