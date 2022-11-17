import React from "react";
import Finanzas from "../img/finanzas.png";
import Contabilidad from "../img/contabilidad.png";
import Beneficios from "../img/beneficios.png";
import Compromiso from "../img/compromiso.png";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="nosotros">
      <div className="container-about-me">
        <div className="item-about-me">
          <div className="icono-about">
            <img src={Finanzas} alt="" />
            <span>Calidad</span>
          </div>
          <div className="icono-about">
            <img src={Contabilidad} alt="" />
            <span>Confianza</span>
          </div>
          <div className="icono-about">
            <img src={Beneficios} alt="" />
            <span>Resultados</span>
          </div>
          <div className="icono-about">
            <img src={Compromiso} alt="" />
            <span>Compromiso</span>
          </div>
        </div>
        <div className="item-about-me">
          <h2>Acerca de Nosotros</h2>
          <p>
            Somos un despacho especializado con 20 años de experiencia en las
            gestión de negocios. Atendemos los requirementos de personas físicas
            y morales.Estamos comprometidos con calidad y el servicio de
            excelencia en todo lo que hacemos, aportando lo mejor de nosotros,
            construyendo la confianza con base en nuestras acciones y
            comportamientos profesionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
