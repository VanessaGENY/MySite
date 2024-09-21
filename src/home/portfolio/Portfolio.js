import ProjectCard from "./project-card/ProjectCard";
import { projects } from "./projectsConf";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio__container container">
      <h2>Ils m'ont fait confiance</h2>
      <div className="projects__container">
        {projects.map((p) => (
          <ProjectCard {...p} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
