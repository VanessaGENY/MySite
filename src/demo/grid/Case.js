import { forwardRef } from "react"
import { enumCaseType } from "../../shared/grids"
import "./Case.css"


const Case = forwardRef((props, ref) => {

    const getClassname = () => {
        if (props.type === enumCaseType.Description) {
            return 'case__description'
        } else if (props.type === enumCaseType.Letter) {
            return 'case__letter'
        } else {
            return 'case__empty'
        }
    }

    const displayDescription = () => {
        return (
            <>
                {props.description.map((desc, index) => (
                        <span className="grid__description" key={`${props.pos}-${index}`}>
                            {index === 1 && <div className="grid_description--separator"></div>}
                            {desc}
                            <span className={`description__arrow${props.arrows[index]}`}></span>
                        </span>)
                    )
                }
            </>
        )
    }

    const displayLetter = () => {
        return (
            <input className="grid__letter" onChange={(e) => props.onInputChange(props.pos, e)} onClick={(e) => props.onClick(props.pos, e)} onKeyUp={(e) => props.onKeyPress(props.pos, e)}></input>
        )
    }


    return (
        <div ref={ref} className={`grid__case ${getClassname()}`}>
            {props.description && displayDescription()}
            {props.type === enumCaseType.Letter && displayLetter()}
        </div>)

})

export default Case;