import "./ProjectList.scss";

const ProjectList = (props) => {
  return (
    <div className="project-list">
      {props.projects.map((p) => {
        return (
          <div
            className={`project-list-item ${
              props.currentProject === p ? "active-project" : ""
            }`}
            onClick={() => props.setCurrentProject(p)}
          >
            {p.title}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
