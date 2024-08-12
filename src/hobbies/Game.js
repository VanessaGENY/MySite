import { useCallback, useEffect, useState } from "react";
import { BASE_ASSETS_URL, gameList } from "../shared/global";
import "./Game.css";
import GameCard from "./GameCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState("");
  const defaultImage = new Image();
  defaultImage.src = `${BASE_ASSETS_URL}/assets/games/${gameList[currentIndex].id}/background.png`;
  const [img, setImg] = useState(defaultImage);

  useEffect(() => {
    const i = new Image();
    i.src = `${BASE_ASSETS_URL}/assets/games/${gameList[currentIndex].id}/background.png`;
    setImg(i);
  }, [currentIndex]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const addNextButton = () => {
    return (
      <button
        className="gamelist-button next-game-button"
        onClick={getNextGame}
      >
        &#5171;
      </button>
    );
  };

  const addPreviousButton = () => {
    return (
      <button
        className="gamelist-button previous-game-button"
        onClick={getPreviousGame}
      >
        &#5176;
      </button>
    );
  };

  const getNextGame = () => {
    setCurrentAnimation("next-game-animation");
  };

  const getPreviousGame = () => {
    setCurrentAnimation("previous-game-animation");
  };

  const getNextIndex = useCallback(
    (index) => {
      let i = index ?? currentIndex;
      return i < gameList.length - 1 ? i + 1 : 0;
    },
    [currentIndex]
  );

  const getPreviousIndex = useCallback(
    (index) => {
      let i = index ?? currentIndex;
      return i > 0 ? i - 1 : gameList.length - 1;
    },
    [currentIndex]
  );

  const isDisplayed = (index) => {
    return (
      index === currentIndex ||
      index === getNextIndex() ||
      index === getPreviousIndex()
    );
  };

  const getClassName = (index) => {
    let className = "displayed-game ";
    if (index === currentIndex) {
      className += `selected-game ${currentAnimation}`;
    } else if (index === getNextIndex()) {
      className += `next-game ${currentAnimation}-next`;
    } else {
      className += `previous-game ${currentAnimation}-previous`;
    }
    return className;
  };

  const addDrawingButton = () => {
    return (
      <div
        className={`go-down__button`}
        onClick={() => (window.location.href = "#drawings")}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <span className="text">Mes dessins</span>
      </div>
    );
  };

  useEffect(() => {
    async function resetAnimation() {
      await delay(1000);
      if (currentAnimation.includes("next")) {
        setCurrentIndex(getNextIndex);
      } else {
        setCurrentIndex(getPreviousIndex);
      }
      setCurrentAnimation("");
    }

    if (currentAnimation !== "") {
      resetAnimation();
    }
  }, [currentAnimation, getNextIndex, getPreviousIndex]);

  return (
    <div
      className="games"
      style={{
        backgroundImage: `url("${img.src}")`,
        transition: "all .5s ease",
      }}
    >
      {addPreviousButton()}
      {gameList.map((game, index) => {
        if (isDisplayed(index))
          return (
            <div key={`game-${index}`} className={getClassName(index)}>
              <GameCard {...game} />
            </div>
          );
        return undefined;
      })}
      <div className={`hidden-game nextnext-game ${currentAnimation}-nextnext`}>
        <GameCard {...gameList[getNextIndex(getNextIndex())]} />
      </div>
      <div
        className={`hidden-game previousprevious-game ${currentAnimation}-previousprevious`}
      >
        <GameCard {...gameList[getPreviousIndex(getPreviousIndex())]} />
      </div>
      {addNextButton()}
      {addDrawingButton()}
    </div>
  );
};

export default Game;
