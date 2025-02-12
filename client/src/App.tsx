import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { useState } from "react";

function App() {
  // const [setSeason, Season] = useState<number>();

  return (
    <>
      <Header />
      <main>
        <Outlet />
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
