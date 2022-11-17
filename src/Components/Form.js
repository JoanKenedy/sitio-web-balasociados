import React from "react";
import { useForm } from "react-hook-form";
import "../styles/form.css";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container-form">
      <h2>¡Contáctanos y agenda una cita!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <label>Nombre Completo:</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es necesario</p>
          )}
        </div>
        <div className="container-input">
          <label>Email:</label>
          <input
            type="email"
            {...register("correo", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.correo?.type === "required" && (
            <p>El campo correo es necesario</p>
          )}
          {errors.correo?.type === "pattern" && (
            <p>El formato de correo no es valido</p>
          )}
        </div>
        <div className="container-input">
          <label>Teléfono:</label>
          <input
            type="text"
            {...register("telefono", {
              required: true,
            })}
          />
          {errors.telefono?.type === "required" && (
            <p>El campo telefono es necesario</p>
          )}
        </div>
        <div className="container-input">
          <label>Régimen fiscal:</label>
          <select
            {...register("regimen", {
              required: true,
            })}
          >
            <option value="fisica">Persona Física</option>
            <option value="moral">Persona Moral</option>
            <option value="fiscal">Régimen de Incorporación Fiscal</option>
          </select>
          {errors.regimen?.type === "required" && (
            <p>El campo regimen es necesario</p>
          )}
        </div>
        <div className="container-input">
          <label>Servicio de interés:</label>
          <select
            {...register("servicios", {
              required: true,
            })}
          >
            <option value="sfc">Servicios Fiscales y Contables</option>
            <option value="pfm">Personas Físicas y Morales</option>
            <option value="di">Declaración de Impuestos</option>
            <option value="au">Auditoría</option>
            <option value="nom">Nómina</option>
            <option value="imss">IMSS E INFONAVIT</option>
          </select>
          {errors.servicios?.type === "required" && (
            <p>El campo servicio es necesario</p>
          )}
        </div>
        <div className="container-input">
          <label>Mensaje:</label>
          <textarea
            {...register("mensaje")}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <input type="submit" value="Enviar" className="enviar" />
      </form>
    </div>
  );
};

export default Form;
