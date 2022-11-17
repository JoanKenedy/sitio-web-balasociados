import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-card">
        <h1>Despacho Contable</h1>
        <p>Tu opción contable para tu negocio</p>
        <div className="container-btn">
          <a href="tel:5578389439" tagetr="_blank" className="btn-hero">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
