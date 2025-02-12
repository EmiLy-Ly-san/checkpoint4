import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink className="admin-link" to={"./admin"}>
        User gestion
      </NavLink>
    </header>
  );
}
