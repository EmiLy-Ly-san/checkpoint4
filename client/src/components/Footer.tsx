import "../style/Footer.css";
import useTheme from "../utils/useTheme";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={`header-container ${theme ? "light" : "dark"}`}>
      <p>2024 copyright</p>
      <img src="/heart-purple.png" alt="" />
      <p>EmiLy-Ly-san</p>
    </footer>
  );
}
