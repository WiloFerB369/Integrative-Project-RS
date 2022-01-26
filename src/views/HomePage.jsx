import React from "react";
import "../css/HomeStyle.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="App">
      <header>
        <Link to="/Login">Ingresar</Link>
        <Link to="/Form">Formulario</Link>
        <Link to="/About">Acerca del Sistema</Link>
      </header>

      <div>
        <h1> Sistema de Registro SOGAGEF </h1>
        <p>
          Aprobación/Rechazo de Solicitudes por parte de Gerencia Financiera
        </p>
        <p>
          Este aplicativo permite registrar las diferentes solicitudes que se
          generan en el área de sistemas de la compañia para su postume
          aprobación por parte de gerencia financiera.
        </p>
        <h2>COMPLEX MADE SIMPLE</h2>
        <img src='./img/vassRubik.png'></img>
      </div>
    </div>
  );
}
