import "../../theme.scss";
import "./Navbar.scss";
import NavItem from "./NavItem";
import { navConf } from "./NavConf";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__list">
          {navConf.map((conf) => {
            return (
              <li className="nav__item">
                <NavItem {...conf}></NavItem>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
