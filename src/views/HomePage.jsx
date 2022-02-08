import React from "react";
import "../css/HomeStyle.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <header className="App_header">
        <Link to="/">
          <img src="./img/vass-logo.png" />
        </Link>
        <div className="App_menu">
          <Link className="link" to="/Login">
            Ingresar
          </Link>
          <Link className="link" to="/About">
            Acerca del Sistema
          </Link>
        </div>
      </header>

      <div className="Home_body">
        <h1> Sistema de Registro SOGAGEF </h1>
        <p>
          Aprobación/Rechazo de Solicitudes por parte de Gerencia Financiera
        </p>
        <div className="Container_CMS">
          <h2>Complex made simple</h2>
          <img src="./img/vassRubik.png"></img>
          <hr />
          <p>
            <hr />
            Este aplicativo permite registrar las diferentes solicitudes que se
            generan en el área de sistemas de la compañia para su postume
            aprobación por parte de gerencia financiera.
          </p>
        </div>
      </div>
    </div>
  );
}
