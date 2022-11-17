import React, { useState } from "react";
import "../styles/services.css";
import Contables from "../img/contables.png";
import Persona from "../img/persona.png";
import Impuestos from "../img/impuestos.png";
import Auditoria from "../img/auditoria.png";
import Nomina from "../img/nomina.png";
import Imss from "../img/imss.png";
const Servicios = () => {
  const servicios = [
    {
      id: 1,
      img: Contables,
      texto: "Servicios Contables",
      text1: "* Registro oportuno de información Contable de acuerdo con NIFs",
      text2:
        "* Impuestos Federales: Sobre la Renta, Al Valor Agregado, Impuesto Especial sobre Producción y Servicios",
      text3: "* Seguridad Social",
      text4: "* Impuestos municipales y estatales",
      text5: "* Planes de regularización fiscal",
      text6: "* Proyecciones de Impuestos",
      text7: "* Asesoría y revisión contable",
    },
    {
      id: 2,
      img: Persona,
      texto: "Servicios Fiscales",
      text1:
        "* Cálculo y declaración de impuestos base conforme a las leyes fiscales actuales para personas físicas y morales ante la autoridad.",
      text3: "* Seguimiento a requerimientos ",
      text4: "* Solicitud de devoluciones ",
      texto5: "* Buzón tributario",
    },
    {
      id: 3,
      img: Impuestos,
      texto: "Servicios Administrativos",
      text1: "* Trámites antes SAT, IMSS, SHCP y gobierno estatal ",
      text2: "* Facturación electrónica",
      text3: "* Realización de inventarios",
      text4: "* Cálculo y timbrado de nómina",
      text5: "* Altas ante el SAT para nuevas empresas",
      text6: "* Solicitud de saldos a favor",
      text7: "* Alta y baja de empleados ante el IMSS",
      text8: "* Alta de obra ante el SIROC (antes SATIC)",
      text9: "* Protección patrimonial mediante el cálculo justo de impuestos",
      text10: "* Atención a autoridades",
      text11: "* Padrón de importadores",
      text12: "* Liquidación y suspensión de empresas",
    },
    {
      id: 4,
      img: Auditoria,
      texto: "Auditoría",
      text1: "* Auditorías y procesos de fiscalización ",
      text2: "* Apoyo en la reexpresión de Estados Financieros",
      text3: "* Auditoria de Estados financieros",
      text4: "* Diagnósticos contables y fiscales",
      text5: "* Revisión de la valuación de instrumentos financieros",
      text6: "* Traducción de Estados Financieros",
      text7: "* Opinión sobre control interno",
    },
    {
      id: 5,
      img: Nomina,
      texto: "Nómina",
      text1: "* Cálculo de nómina  ",
      text2: "* Gestión y análisis de la nómina de tus empleados",
      text3: "* Cálculo de finiquitos",
      text4: "* Liquidaciones",
      text5: "* Aguinaldos",
      text6: "* IMSS",
      text7: "* INFONAVIT",
    },
    {
      id: 6,
      img: Imss,
      texto: "Análisis Financiero",
      text1:
        "Es un servicio enfocado a realizar un compendio de análisis financieros enfocados a evaluar la viabilidad, estabilidad y rentabilidad de un negocio, segmento, producto y/o proyecto.",
    },
  ];
  const [model, setModel] = useState(false);
  const [temTexto, setTemTexto] = useState("");
  const [temTexto2, setTemTexto2] = useState("");
  const [temTexto3, setTemTexto3] = useState("");
  const [temTexto4, setTemTexto4] = useState("");
  const [temTexto5, setTemTexto5] = useState("");
  const [temTexto6, setTemTexto6] = useState("");
  const [temTexto7, setTemTexto7] = useState("");
  const [temTexto8, setTemTexto8] = useState("");
  const [temTexto9, setTemTexto9] = useState("");
  const [temTexto10, setTemTexto10] = useState("");
  const [temTexto11, setTemTexto11] = useState("");
  const [temTexto12, setTemTexto12] = useState("");
  const [temTexto13, setTemTexto13] = useState("");
  const getImg = (
    texto,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12
  ) => {
    setTemTexto(texto);
    setTemTexto2(text1);
    setTemTexto3(text2);
    setTemTexto4(text3);
    setTemTexto5(text4);
    setTemTexto6(text5);
    setTemTexto7(text6);
    setTemTexto8(text7);
    setTemTexto9(text8);
    setTemTexto10(text9);
    setTemTexto11(text10);
    setTemTexto12(text11);
    setTemTexto13(text12);
    setModel(true);
  };
  return (
    <>
      <div
        className={model ? "model open" : "model"}
        onClick={() => setModel(false)}
      >
        <div className="description">
          <h6>{temTexto}</h6>
          <p>{temTexto2}</p>
          <p>{temTexto3}</p>
          <p>{temTexto4}</p>
          <p>{temTexto5}</p>
          <p>{temTexto6}</p>
          <p>{temTexto7}</p>
          <p>{temTexto8}</p>
          <p>{temTexto9}</p>
          <p>{temTexto10}</p>
          <p>{temTexto11}</p>
          <p>{temTexto12}</p>
          <p>{temTexto13}</p>
        </div>

        <i
          className="fa-solid fa-xmark cerrar"
          onClick={() => setModel(false)}
        ></i>
      </div>
      <div className="services" id="servicios">
        <h2>Servicios</h2>
        <div className="container-services">
          {servicios.map((servicio, index) => (
            <div
              className="servicios-card"
              key={index}
              onClick={() =>
                getImg(
                  servicio.texto,
                  servicio.text1,
                  servicio.text2,
                  servicio.text3,
                  servicio.text4,
                  servicio.text5,
                  servicio.text6,
                  servicio.text7,
                  servicio.text8,
                  servicio.text9,
                  servicio.text10,
                  servicio.text11,
                  servicio.text12
                )
              }
            >
              <div className="item-services">
                <img src={servicio.img} alt="" />
              </div>
              <div className="services-footer">
                <p>{servicio.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicios;
