import { useState } from "react";
import { BASE_ASSETS_URL } from "../global";

const ImageViewer = (props) => {

    const [imgSrc] = useState(`${BASE_ASSETS_URL}${props.src}`)

    return (
        <img src={imgSrc} className={props.className} alt={props.alt} />
    )
}

export default ImageViewer;