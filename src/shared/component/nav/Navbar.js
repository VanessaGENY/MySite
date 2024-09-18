import "../../theme.scss";
import "./Navbar.scss";
import NavItem from "./NavItem";
import { navConf } from "./NavConf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);
  const [showBurger, setShowBurger] = React.useState(false);

  const handleResize = (event) => {
    const width = event.target.innerWidth;
    if (width > 900) {
      setShowNav(true);
      setShowBurger(false);
    } else {
      setShowNav(false);
      setShowBurger(true);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <nav className="nav">
      <div className="nav__container">
        {showBurger && (
          <div className="nav__burger" onClick={() => setShowNav(!showNav)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        {showNav && (
          <ul className="nav__list">
            {navConf.map((conf) => {
              return (
                <li className="nav__item">
                  <NavItem {...conf}></NavItem>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
