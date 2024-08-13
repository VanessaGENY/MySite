import NavButton from "../shared/component/NavButton";
import { BASE_ASSETS_URL } from "../shared/global";
import Drawing from "./Drawing";
import "./Drawings.css";

const Drawings = (props) => {
  const drawingsFolder = require.context("../../public/assets/", true);

  const drawingList = drawingsFolder
    .keys()
    .filter((k) => k.startsWith("./drawings"))
    .reverse()
    .map((drawing) => {
      const i = new Image();
      console.log(drawing);
      i.src = `${BASE_ASSETS_URL}/assets/${drawing.slice(2)}`;
      return i;
    });

  const addGamesButton = () => {
    return <NavButton up uri="#games" text="Jeux Vidéos" />;
  };

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
      {addGamesButton()}
    </div>
  );
};

export default Drawings;
