import { NavHashLink } from "react-router-hash-link";
import "./NavItem.scss";
import { useLocation } from "react-router-dom";

const NavItem = (props) => {
  let location = useLocation();

  const getClassName = (item, withFrag = true) => {
    return `${location.pathname}${withFrag ? location.hash : ""}`.endsWith(
      item.link
    )
      ? "selected"
      : "";
  };

  return (
    <div className="nav-item--container">
      <div className="nav-item--link">
        <NavHashLink
          className={`nav__link ${getClassName(props, false)}`}
          exact
          to={props.link}
          activeClassName=""
        >
          {props.title}
        </NavHashLink>
      </div>
      <div className="nav-item--subsections">
        {props.subSections &&
          props.subSections.map((s) => {
            return (
              <div className="nav-link--wrapper">
                <NavHashLink
                  className={`nav__link ${getClassName(s)}`}
                  exact
                  to={`${props.link}${s.link}`}
                  activeClassName=""
                >
                  {s.title}
                </NavHashLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavItem;
