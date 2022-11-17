import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-bal-asocs.png";
import Burger from "./Burger";
import "../styles/general.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <>
      <header>
        <div className="header-uno">
          <div>
            <a href="tel:5578389439">
              <i className="fa-solid fa-phone"></i> (55) 78389439
            </a>
            <a href="tel:5574542657">
              <i className="fa-solid fa-phone"></i> (55) 74542657
            </a>

            <a href="mailto:b.a.l.asocs.asocs@outlook.com">
              <i className="fa-solid fa-envelope"></i>
              b.a.l.asocs.asocs@outlook.com
            </a>
          </div>

          <div>
            <p>Agenda tu asesoría GRATUITA ¡Contáctanos!</p>
          </div>
        </div>
        <nav>
          <img src={Logo} alt="" />
          <ul className={`menu ${clicked ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={handleClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="nosotros" onClick={handleClick}>
                Nosotros
              </Link>
            </li>
            <li>
              <a href="#servicios" onClick={handleClick}>
                Servicios
              </a>
            </li>
            <li>
              <a
                href="tel:5578389439"
                target="_blank"
                onClick={handleClick}
                id="contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="btn-open">
            <Burger clicked={clicked} handleClick={handleClick} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
