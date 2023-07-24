import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-auto container max-w-6xl">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
