import { useEffect, useState } from "react";
import { BASE_ASSETS_URL } from "../global";

const ImageViewer = (props) => {

    const [imgSrc] = useState(`${BASE_ASSETS_URL}${props.src}`)
    const [img, setImg] = useState((new Image().src = imgSrc));

    useEffect(() => {
          const img = new Image();
          img.src = imgSrc;
          setImg(img);
      }, [imgSrc]);


    return (
        <img src={img.src} className={props.className} alt={props.alt} />
    )
}

export default ImageViewer;