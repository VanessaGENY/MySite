import "./GameCard.css"

const GameCard = (props) => {

    return (
        <div className="game-card">
            <div className="game-card__logo-container">
                <img className="game-card__logo" src={`/assets/games/${props.id}/logo.png`}/>
            </div>
            <span className="game-card__description">{props.desc}</span>
        </div>
    )
}
export default GameCard;