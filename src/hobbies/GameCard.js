import ImageViewer from "../shared/component/ImageViewer";
import "./GameCard.css"

const GameCard = (props) => {

    return (
        <div className="game-card">
            <div className="game-card__logo-container">
                <ImageViewer className="game-card__logo" alt="" src={`/assets/games/${props.id}/logo.png`}/>
            </div>
            <span className="game-card__description">{props.desc}</span>
        </div>
    )
}
export default GameCard;