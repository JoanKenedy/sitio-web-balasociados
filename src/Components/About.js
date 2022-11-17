import React from "react";
import FotoNosotros from "../img/nosotros.png";
import Logito from "../img/loguito.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="item-about">
        <img src={FotoNosotros} alt="" />
      </div>
      <div className="item-about">
        <h2>Nosotros</h2> <img src={Logito} alt="" />
        <p>
          Somos un despacho de contadores públicos que ofrecemos servicios
          contables y fiscales a personas físicas y morales.
          <br />
          Nuestra experiencia nos permite ofrecer el mejor servicio para tu
          negocio.
        </p>
      </div>
    </div>
  );
};

export default About;
