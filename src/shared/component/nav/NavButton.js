import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavButton.css";

const NavButton = (props) => {
  return (
    <div
      className={`nav__button`}
      onClick={() => (window.location.href = props.uri)}
    >
      <div className="icon">
        <FontAwesomeIcon icon={props.down ? faAngleDown : faAngleUp} />
      </div>
      <span className="text">{props.text}</span>
    </div>
  );
};

export default NavButton;
