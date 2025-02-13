import { NavLink, Outlet, useMatch } from "react-router-dom";
import "../../style/HomePage.css";

export default function Admin() {
  const match = useMatch("/admin"); // Match give the object routes in the parenthese if we are in this route during the navigation , otherwise, match returns null if it's not the case

  return (
    <div className="home-page">
      {!!match && (
        <section className="button-home-wrapper">
          <NavLink to={"./add-Background"} className="standard-button">
            Add a background
          </NavLink>
          <NavLink
            className="standard-button"
            to={"./update-delete-background"}
          >
            Update or delete
          </NavLink>
          <NavLink className="standard-button" to={"./user-gestion"}>
            User gestion
          </NavLink>
        </section>
      )}
      <Outlet />
    </div>
  );
}
