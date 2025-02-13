import { NavLink } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <header>
      <NavLink className="logo" to={"/"}>
        Anime Art Season
      </NavLink>
      <nav>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/"}>Collections</NavLink>
        <NavLink to={"/admin"}>My favorites</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    </header>
  );
}
