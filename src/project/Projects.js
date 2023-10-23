import { projectList } from "../shared/global";
import Project from "./Project";

const Projects = () => {
    return (
        <div>
            {projectList.map((item, index) => (
                <Project {...item} reversed={index%2===1}></Project>
            ))}
        </div>
    )
}

export default Projects;