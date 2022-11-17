import React, { Fragment } from "react";
import "../styles/slider.css";
import PortadaInicial from "../img/slider-1.png";
import PortadaUno from "../img/slider-2.png";
import PortadaDos from "../img/slider-3.png";
import PortadaTres from "../img/slider-4.png";

export const Slider = () => {
  const images = [PortadaInicial, PortadaUno, PortadaDos, PortadaTres];
  const [imagenActual, setImagenActual] = React.useState(0);

  const cantidad = images?.length;

  if (!Array.isArray(images) || cantidad === 0) {
    return;
  }

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <>
      <div className="container_hero">
        <div className="container_slider">
          <button onClick={anteriorImagen} className="left_button">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          {images.map((image, index) => {
            return (
              <div>
                {imagenActual === index && (
                  <img
                    key={index}
                    src={image}
                    alt="imagen"
                    className="img_slider"
                  />
                )}
              </div>
            );
          })}

          <button onClick={siguienteImagen} className="right_button">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-card">
          <h1>Despacho Contable</h1>
          <p>Tu opción contable para tu negocio</p>
          <div className="container-btn">
            <a href="tel:5578389439" target="_blank" className="btn-hero">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
