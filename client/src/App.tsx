import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./style/Global.css";

function App() {
  const [setSeason, Season] = useState();

  return (
    <>
      <Header />
      <main>
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
