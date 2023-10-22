import { projectList } from "../shared/global";
import Project from "./Project";

const Projects = () => {
    return (
        <div>
            {projectList.map(item => (
                <Project {...item}></Project>
            ))}
        </div>
    )
}

export default Projects;