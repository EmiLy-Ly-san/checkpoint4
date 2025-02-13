import { NavLink } from "react-router-dom";
import "../style/Header.css";
import useTheme from "../utils/useTheme";

export default function Header() {
  const { theme, setTheme } = useTheme();
  // console.log({ theme });
  return (
    <header className={`header-container ${theme ? "light" : "dark"}`}>
      <NavLink className="logo" to={"/"}>
        Anime Art Season
      </NavLink>
      <button
        type="button"
        onClick={() => setTheme(!theme)}
        className="button-switch-theme"
      >
        <img
          className="icon-switch-theme"
          src={theme ? "/dark_mode.png" : "/light_mode.png"}
          alt="switch theme icon"
        />
      </button>
      <nav>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/"}>Collections</NavLink>
        <NavLink to={"/favorites"}>My favorites</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    </header>
  );
}
