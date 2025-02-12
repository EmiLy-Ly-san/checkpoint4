import { NavLink, Outlet, useMatch } from "react-router-dom";

export default function Admin() {
  const match = useMatch("/admin"); // Match give the object routes in the parenthese if we are in this route during the navigation , otherwise, match returns null if it's not the case

  return (
    <div className="admin-page">
      <h1 className="title-admin">Admin section</h1>
      {!!match && (
        <section className="button-admin-wrapper">
          <NavLink className="admin-link" to={"./add-Background"}>
            Add a background
          </NavLink>
          <NavLink className="admin-link" to={"./update-delete-background"}>
            Update or delete
          </NavLink>
          <NavLink className="admin-link" to={"./user-gestion"}>
            User gestion
          </NavLink>
        </section>
      )}
      <Outlet />
    </div>
  );
}
