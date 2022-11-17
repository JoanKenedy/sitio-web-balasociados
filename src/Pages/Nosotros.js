import React from "react";
import AboutMe from "../Components/AboutMe";
import HeroAbout from "../Components/HeroAbout";
import Metodologia from "../Components/Metodologia";
import Servicios from "../Components/Servicios";

function Nosotros() {
  return (
    <div>
      <HeroAbout />
      <AboutMe />
      <Metodologia />
      <Servicios />
    </div>
  );
}

export default Nosotros;
