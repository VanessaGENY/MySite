import ReactPlayer from "react-player";
import "./Project.css"

const Project = (props) => {

    return (
        <div className="project" style={{
            backgroundImage: `url("/assets/${props.id}/background.png")`
          }}>
            <span className="project-title neon-text neon-border">{props.title}</span>
            <p className="project-desc">{props.description}</p>
            <div className="project-container">
               <div className="project-info">
                   
                    <div className="project-steps">
                        {props.steps.map(item => (
                            <span className="project-step neon-border-small">{item}</span>
                        ))}
                    </div>
                
                    <div  className="project-skills">
                        {props.skills.map(item => (
                            <span className="project-skill">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="project-demo">
                <ReactPlayer
                    className='react-player neon-border'
                    url={`/assets/${props.id}/video.mp4`}
                    width={'fit-content'}
                    height={'90%'}
                    controls = {true}
                />
                </div>
            </div>
           
           
        </div>
    )

}


export default Project;