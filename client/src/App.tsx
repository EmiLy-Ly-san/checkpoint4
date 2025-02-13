import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useTheme from "./utils/useTheme";

import "./style/Global.css";

function App() {
  const [setSeason, Season] = useState();
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <main className={theme ? "light" : "dark"}>
        <Outlet context={{ setSeason, Season }} />
      </main>
      <Footer />
      <ToastContainer
        role="alert"
        aria-live="assertive"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
