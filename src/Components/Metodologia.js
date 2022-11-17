import React from "react";
import "../styles/metodologia.css";

const Metodologia = () => {
  const metodologia = [
    {
      title: "Responsabilidad",
      texto:
        "Entregando siempre servicio personalizado y de alta calidad para ayudarlos a cumplir con sus objetivos en tiempo y forma",
    },
    {
      title: "Compromiso",
      texto:
        "Proporcionar un servicio eficiente y eficaz para satisfacer las necesidades de cada uno de los servicios que se brinden a nuestros clientes",
    },
    {
      title: "Ética profesional",
      texto:
        "Actuando siempre con rectitud y honestidad, manteniendo siempre el honor, dignidad y capacidad profesional; teniendo las reglas de ética más elevadas en todos sus actos en el desarrollo de nuestras actividades.",
    },
  ];
  return (
    <div className="metodologia">
      <h2>Nuestra metodología</h2>
      <p>
        Nuestros servicios se guían bajo criterios morales estrictos, derivados
        de nuestros valores y se orienta por las siguientes líneas
        metodológicas.
      </p>
      <div className="container-metodologia">
        {metodologia.map((card) => (
          <div className="card-metodologia">
            <h5>{card.title}</h5>
            <p>{card.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metodologia;
