import { projectList } from "../shared/global";
import Project from "./Project";

const Projects = () => {

    return (
        <div style={{scrollBehavior: 'smooth'}}>
            {projectList.map((item, index) => (
                <Project {...item} reversed={index % 2 === 1}></Project>
            ))}
            <div></div>
        </div>
    )
}

export default Projects;