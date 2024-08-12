import { BASE_ASSETS_URL } from "../shared/global";
import "./Project.css"

const Project = (props) => {

    let reverseClassName = (props.reversed) ? 'reversed-layout' : '';
    return (
        <div className={`project ${props.template}-template`} style={{
            backgroundImage: `url("${BASE_ASSETS_URL}/assets/projects/${props.id}/background.png")`
          }}>
            <span className={`project-title ${props.template}-text ${props.template}-border`}>{props.title}</span>
            <p className={`project-desc ${props.template}-desc`}>{props.description}</p>
            <div className={`project-container ${reverseClassName}`}>
               <div className="project-info">
                    <div className="project-steps">
                        {props.steps.map((item, index) => (
                            <span key={`${props.title}-step-${index}`} className={`project-step ${props.template}-step ${props.template}-text--small ${props.template}-border--small`}>{item}</span>
                        ))}
                    </div>
                
                    <div  className="project-skills">
                        {props.skills.map((item, index) => (
                            <span key={`${props.title}-skill-${index}`} className="project-skill">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="project-demo">
                    {props.demo}
                </div>
            </div>
           
           
        </div>
    )

}


export default Project;