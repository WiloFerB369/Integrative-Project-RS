import React from "react";
import "../css/AboutStyle.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className = 'App'>
      <header>
        <Link to="/">Inicio</Link>
        <Link to="/Login">Ingresar</Link>
        <Link to="/Form">Formulario</Link>
      </header>
      <div>
        <h1>¿Que es el Sitema de Regitro SOGAGEF</h1>
        <p>
          Dada la constante necesidad de escalar solicitudes que requieren
          financiación para el área de sistemas dentro de la compañía, se decide
          crear SOGAGEF, la cual permite tener un control de todas{" "}
          <b>las solicitudes a ser aprobar</b> por parte de la gerencia
          financiera, pudiendo mediante un formulario elegir específicamente el
          tipo de solicitud y tener un registro de todos los requerimientos que
          han sido o no aprobados, logrando seleccionar el nivel de importancia
          de la misma para ser validado y aprobado con más rapidez.
        </p>
        <p>
          En este aplicativo se pueden encontrar solicitudes de compra de
          software y hardware según sea requerido en la medida para alguna labor
          en específico o un usuario lo requiera. También se pueden encontrar
          solicitudes monetarias para el pago de los costos de envió de las
          diferentes máquinas de ingresos nuevos o cambios con mejores
          características lo que representa un aumento en el valor del alquiler
          para la compañía.
        </p>
        <p>
          SOGAGEF (<b>So</b>licitudes para <b>a</b>probación de <b>Ge</b>rencia{" "}
          <b>F</b>inanciera) nace como propuesta dentro del Semillero de JAVA de
          la compañía, para satisfacer la necesidad de llevar un control de
          todas estas solicitudes, que con el paso de los días son recurrentes y
          necesarias. Ideado, Diseñado y puesto en marcha por Wilmer Salamanca
          Granados {" "}
          <a
            href="https://www.linkedin.com/in/wiloferb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (WiloFerB).
          </a>
        </p>
      </div>
    </div>
  );
}
