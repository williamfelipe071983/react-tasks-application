import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [gestion, setGestion] = useState("");
  const [formatos, setFormatos] = useState("");
  const handleSubmit = e => {
    e.preventDefault ();
    alert("El formulario se ha enviado");
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu gestion</p>
        <label htmlFor="calidad">
          <input
            type="radio"
            id="Calidad"
            name="gestion"
            value={gestion}
            onChange={(e) => setGestion(e.target.value)}
            defaultChecked
          />
          Calidad
        </label>

        <label htmlFor="Ambiental">
          <input
            type="radio"
            id="Ambiental"
            name="gestion"
            value={gestion}
            onChange={(e) => setGestion(e.target.value)}
          />
          Ambiental
        </label>

        <label htmlFor="SST">
          <input
            type="radio"
            id="SST"
            name="gestion"
            value={gestion}
            onChange={(e) => setGestion(e.target.value)}
          />
          SST
        </label>

        <label htmlFor="Social">
          <input
            type="radio"
            id="Social"
            name="gestion"
            value={gestion}
            onChange={(e) => setGestion(e.target.value)}
          />
          Social
        </label>
        <label htmlFor="Area tecnica">
          <input
            type="radio"
            id="Area Tecnica"
            name="gestion"
            value={gestion}
            onChange={(e) => setGestion(e.target.value)}
          />
          Área Técnica
        </label>
        <p>Elige los formatos que quieras acceder</p>
        <select name="formatos" onChange={(e) => setFormatos(e.target.value)}>
            <option value=" ">----</option>
            <option value="Procedimientos seguros">Procedimientos seguros SST</option>
            <option value="Formatos Ambientales">Formatos ambientales</option>
            <option value="Formatos Generales">Formatos generales</option>
            <option value="PIG">PIG por proyectos</option>
            <option value="Matrices">Matrices</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
