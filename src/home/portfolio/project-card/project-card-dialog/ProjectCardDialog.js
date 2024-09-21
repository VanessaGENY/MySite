import { Dialog } from "@mui/material";
import React from "react";
import "./ProjectCardDialog.scss";
import ProjectList from "./ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Tabs = {
  info: "Infos",
  techs: "Technos",
};

const ProjectCardDialog = (props) => {
  const [tab, setTab] = React.useState("info");
  const [tabIndex, setTabIndex] = React.useState(0);
  const [currentProject, setCurrentProject] = React.useState(
    props.projects?.[0] ?? {}
  );

  const changeTab = (k, index) => {
    setTab(k);
    setTabIndex(index);
  };

  const getProjectSection = (project) => {
    return (
      <div className="dialog-content__project-container">
        <div className="dialog-content__title">
          <span className="project-title dialog-project-title">
            {project.title}
          </span>
          <div className="dialog-content__breaker"></div>
        </div>
        <div className="tabs__header">
          {Object.keys(Tabs).map((k, index) => {
            return (
              <span
                key={k}
                className={`tab__header ${tab === k ? "active-tab" : ""}`}
                onClick={() => changeTab(k, index)}
              >
                {Tabs[k]}
              </span>
            );
          })}
          <span
            class="glider"
            style={{ transform: `translateX(${tabIndex * 100}%)` }}
          ></span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Dialog
        open={props.open && props.projects}
        onClose={() => props.setOpen(!props.isOpen)}
        maxWidth="80%"
      >
        <div className="dialog-content__container">
          <div
            className="dialog-content__close-button"
            onClick={() => props.setOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {props.projects && (
            <ProjectList
              projects={props.projects}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
          )}
          <div className="dialog-content__projects">
            {getProjectSection(currentProject)}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProjectCardDialog;
