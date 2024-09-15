import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" exact to="/">
              Accueil
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" exact to="/projects">
              Projets
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" exact to="/hobbies">
              Hobbies
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" exact to="/music">
              Musique
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
