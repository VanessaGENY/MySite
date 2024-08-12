import { BASE_ASSETS_URL } from "../shared/global";
import Drawing from "./Drawing";
import "./Drawings.css";

const Drawings = (props) => {
  const drawingsFolder = require.context("../../public/assets/drawings", true);

  const drawingList = drawingsFolder.keys().map((drawing) => {
    const i = new Image();
    i.src = `${BASE_ASSETS_URL}/assets/drawings/${drawing.slice(2)}`;
    return i;
  });

  console.log(drawingList);

  return (
    <div id="drawings" className="drawings__container">
      <div className="drawings__title">
        <span className="title">Mes dessins</span>{" "}
        <span className="subtitle">Du plus récent au plus ancien</span>
      </div>
      <div className="drawings__list">
        {drawingList.map((drawing, index) => (
          <Drawing key={index} url={drawing.src} />
        ))}
      </div>
    </div>
  );
};

export default Drawings;
