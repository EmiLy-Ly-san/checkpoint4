import "../../style/AddBackground.css";

export default function Login() {
  return (
    <div className="add-page">
      <form className="add-Background-form">
        <fieldset className="main-info-background-wrapper">
          <input
            type="email"
            id="name"
            name="name"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="name"
            name="name"
            placeholder="Password"
            required
          />
        </fieldset>

        <section className="form-buttons-wrapper">
          <button type="submit" className="little-cta">
            Connexion
          </button>
        </section>
      </form>
    </div>
  );
}
