import React from "react";
import "../styles/heroabout.css";

const HeroAbout = () => {
  return (
    <div className="hero-about">
      <div className="hero-card-about">
        <h1>Innovación - El pilar de BAL & ASOCS </h1>
        <p>Conoce los valores que caracterizan a nuestro equipo.</p>
        <div className="container-btn-about">
          <a href="tel:5578389439" tagetr="_blank" className="btn-about">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
