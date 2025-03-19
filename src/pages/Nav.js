import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const Nav = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className={theme === "light" ? "nav-light" : "nav-dark"}>
        <ul>
          <li>
            <Link to="/" className="nav-link nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login" className="nav-link nav-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="nav-link nav-item">
              SignUp
            </Link>
          </li>
        </ul>
        <button className="btn btn-primary" onClick={ToggleTheme}>
          Switch to {theme === "light" ? "dark" : "light"}
        </button>
      </nav>
    </>
  );
};

export default Nav;
