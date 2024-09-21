import React from "react";
import "./ProjectCard.scss";
import ProjectCardDialog from "./project-card-dialog/ProjectCardDialog";

const ProjectCard = (props) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="project-card__container">
      <div className="project-card__logo" onClick={() => setOpen(!isOpen)}>
        <img src={props.logo} alt={`Logo of ${props.client}`} />
      </div>
      <ProjectCardDialog
        isOpen={isOpen}
        setOpen={setOpen}
        projects={props.projects}
      ></ProjectCardDialog>
    </div>
  );
};

export default ProjectCard;
