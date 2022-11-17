import React from "react";
import About from "../Components/About";
import Servicios from "../Components/Servicios";
import Slider from "../Components/Slider";
import "../styles/hero.css";

function Home() {
  return (
    <div className="body-home">
      <Slider />
      <About />
      <Servicios />
    </div>
  );
}

export default Home;
