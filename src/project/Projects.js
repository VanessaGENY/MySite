import { projectList } from "../shared/global";
import Project from "./Project";

const Projects = () => {
  const handleScroll = (event) => {
    console.log(event.eventPhase);
    window.scrollBy({ top: 0, behavior: "smooth" });
  };

  window.onscroll = handleScroll;

  return (
    <div style={{ scrollBehavior: "smooth", position: "absolute" }}>
      {projectList.map((item, index) => (
        <Project
          key={`project-${index}`}
          {...item}
          reversed={index % 2 === 1}
        ></Project>
      ))}
      <div></div>
    </div>
  );
};

export default Projects;
