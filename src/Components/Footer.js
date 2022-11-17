import React from "react";
import Form from "./Form";
import "../styles/footer.css";
import Logo from "../img/logo-bal-asocs.png";

const Footer = () => {
  const iframeSource =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8589645846096!2d-99.18705648561874!3d19.375258547533658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff868f6398ef%3A0x5be0b66e6c3acc8f!2sAv.%20Extremadura%20157%2C%20Insurgentes%20Mixcoac%2C%20Benito%20Ju%C3%A1rez%2C%2003920%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1663081398441!5m2!1ses-419!2smx" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="item-footer">
          <div className="contacto-footer">
            <Form />
          </div>
          <div className="contacto-footer">
            <div className="direction">
              <h5>Dirección:</h5>
              <h6>
                Av. Extremadura 157, Insurgentes Mixcoac, Benito Juárez, 03920
                Ciudad de México, CDMX
              </h6>
            </div>
            <div className="container-mapa">
              <div
                className="mapa"
                dangerouslySetInnerHTML={{ __html: iframeSource }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-principal-footer">
        <div className="footer-social">
          <h6>Ligas de interés</h6>
          <a href="https://imcp.org.mx/">Instituto Mexicano de Contadores </a>
          <a href="https://www.fca.unam.mx/">
            Facultad de contaduría y administración
          </a>
          <a href="https://login.siat.sat.gob.mx/">Contabilidad electrónica</a>
          <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf">
            Código Fiscal de la federación
          </a>
        </div>
        <div className="footer-social">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-social">
          <h6>Contacto</h6>
          <a href="mailto:b.a.asocs@outlook.com">b.a.asocs@outlook.com</a>
          <a href="tel:5578389439">(55) 78389439</a>
          <a href="https://goo.gl/maps/ydeVRo2F3Vy4APXE7">
            Av. Extremadura 157, Insurgentes Mixcoac, <br /> Benito Juárez,
            03920 Ciudad de México, CDMX
          </a>
        </div>
        <div className="footer-social">
          <p>
            © Copyright 2012 - 2022 | BAL & Asocs | Todos los derechos
            reservados | Contadores Públicos en CDMX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
