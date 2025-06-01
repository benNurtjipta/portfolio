const Projects = () => {
  const projects = [
    {
      title: "leafio",
      description: "Project: A marketplace to buy and sell plants.",
      link: "https://leafio.vercel.app/",
    },
    {
      title: "808",
      description: "Simple stepsequencer using Web Audio API.",
      link: "https://808-rose.vercel.app/",
    },
    {
      title: "run-in-dir",
      description: "VS Code extension to run a script from status bar.",
      link: "https://github.com/benNurtjipta/run-in-dir",
    },
    {
      title: "vscrx",
      description: "Android app to remote control VS Code.",
      link: "https://github.com/benNurtjipta/vscrx",
    },
  ];

  return (
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div key={idx} className="project-item">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link.includes("github")
              ? "VIEW ON GITHUB"
              : "VISIT WEBSITE"}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
