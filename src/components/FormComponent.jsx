import "../css/FormStyle.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormComponent() {
  //Variables para solicitud por medio de HOOK useState
  const [request, setRequest] = useState("");
  const [hardware, setHardware] = useState("");
  const [software, setSoftware] = useState("");
  const [shipping, setShipping] = useState("");
  const [others, setOthers] = useState("");
  const [observation, setObservation] = useState("");

  //Variables para información de envio por medio
  //HOOK useState
  const [DNI, setDNI] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");

  //Variables para desactivar los SELECTS
  const [dis_Hard, setDis_Hard] = useState(true);
  const [dis_Soft, setDis_Soft] = useState(true);
  const [dis_Ship, setDis_Ship] = useState(true);
  const [dis_Others, setDis_Others] = useState(true);

  const navigate = useNavigate();

  //Funcion que permite
  function handleRequestChange() {
    console.log(request);
    if (request === "0") {
      setDis_Hard(true);
      setDis_Soft(true);
      setDis_Ship(true);
      setDis_Others(true);
    } else if (request === "1") {
      setDis_Hard(false);
      setDis_Soft(true);
      setDis_Ship(true);
      setDis_Others(true);
    } else if (request === "2") {
      setDis_Hard(true);
      setDis_Soft(false);
      setDis_Ship(true);
      setDis_Others(true);
    } else if (request === "3") {
      setDis_Hard(true);
      setDis_Soft(true);
      setDis_Ship(false);
      setDis_Others(true);
    } else if (request === "4") {
      setDis_Hard(true);
      setDis_Soft(true);
      setDis_Ship(true);
      setDis_Others(false);
    } else {
      setDis_Hard(true);
      setDis_Soft(true);
      setDis_Ship(true);
      setDis_Others(true);
    }
  }
  //Funcion para almacenar la solicitud en LocalStorage
  function handleFormValidated() {
    const info_request = [{
      request: request,
      hardware: hardware,
      software: software,
      shipping: shipping,
      others: others,
      observation: observation,
      DNI: DNI,
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      department: department,
      city: city,
      address: address,
      comments: comments,
    }];

    //Validamos si ya existe la lista de Usuarios en LS
    let recoverdData = localStorage.getItem("Requests");

    if (recoverdData == null) {
      //No hay nada guardado, por tanto se crea la lista
      localStorage.setItem("Requests", JSON.stringify(info_request));
    } else {
      //Existe la lista de Users en el LS
      let data = JSON.parse(recoverdData);
      let new_request = info_request[0];
      //Añadimos el nuevo usuario a la lista Users
      data.push(new_request);
      //guardamos la lista actualizada en el LS
      localStorage.setItem("Requests", JSON.stringify(data));
    }

    alert("Registro Exitoso!!!");
    navigate("../Form", { replace: true });
  }

  return (
    <div className="Container">
      <form onSubmit={handleFormValidated} method="POST">
        <h2>Información de la Solicitud</h2>
        <div>
          <label for="solicitud">Tipo de Solicitud </label>

          <select
            id="solicitud"
            name="solicitud"
            required="true"
            onChange={(event) => setRequest(event.target.value)}
            onClick={handleRequestChange}
          >
            <option value="0">Elija una opción...</option>
            <option value="1">Hardware</option>
            <option value="2">Software</option>
            <option value="3">Envíos</option>
            <option value="4">Otros...</option>
          </select>
        </div>

        <div className="Hardware">
          <label for="hardware_select">Hardware </label>

          <select
            id="hardware_select"
            name="hardware_select"
            required="true"
            disabled={dis_Hard}
            onChange={(event) => setHardware(event.target.value)}
            onClick={handleRequestChange}
          >
            <option value="0">Elija una opción...</option>
            <option value="1">Cambio de PC</option>
            <option value="2">Aumento de RAM</option>
            <option value="3">Cambio disco HDD a SSD</option>
            <option value="4">Aumento de disco</option>
            <option value="5">Cargador PC</option>
            <option value="6">Cargador PC MAC</option>
            <option value="7">Mouse</option>
            <option value="8">Teclado</option>
            <option value="9">Adaptador de red</option>
            <option value="10">Modem</option>
            <option value="11">Tabla digitalizadora</option>
            <option value="12">Monitor</option>
            <option value="13">Multipuerto</option>
            <option value="14">Conversor VGA a HDMI</option>
            <option value="15">Conversor HDMI a VGA</option>
            <option value="16">Conversor red MAC</option>
            <option value="17">Celular Android</option>
            <option value="18">Cargador celular Android</option>
            <option value="19">Celular Iphone</option>
            <option value="20">Cargador celular Iphone</option>
          </select>
        </div>

        <div className="Software">
          <label for="software_select">Software </label>
          <select
            name="software_select"
            required="true"
            disabled={dis_Soft}
            onChange={(event) => setSoftware(event.target.value)}
            onClick={handleRequestChange}
          >
            <option value="0">Elija una opción...</option>
            <option value="1">Cambio de licencia E1 a E3</option>
            <option value="2">Licencia Software, Cual?</option>
            <option value="3">Licencia Antivirus</option>
            <option value="4">Otro, Cual?</option>
          </select>
        </div>

        <div className="Envios">
          <label for="shipping_select">Envíos </label>

          <select
            name="shipping_select"
            required="true"
            disabled={dis_Ship}
            onChange={(event) => setShipping(event.target.value)}
            onClick={handleRequestChange}
          >
            <option value="0">Elija una opción...</option>
            <option value="1">Kit ergonomico</option>
            <option value="2">Kit bienvenida</option>
            <option value="3">Maquina (Ingreso nuevo)</option>
            <option value="4">Accesorios, Cuales?</option>
          </select>
        </div>

        <div className="Otros">
          <label for="others">Otros, cuales? </label>
          <textarea
            name="others"
            placeholder="Especifique que otros requerimientos necesitan ser aprobados"
            rows="5"
            cols="50"
            disabled={dis_Others}
            onChange={(event) => setOthers(event.target.value)}
            onClick={handleRequestChange}
          ></textarea>
        </div>

        <div className="Comentarios">
          <label for="comments"> Comentarios u Observaciones </label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Agregue acá sus comentarios"
            rows="5"
            cols="30"
            onChange={(event) => setObservation(event.target.value)}
          ></textarea>
        </div>
        <hr />
        <h2>Información de Envío</h2>
        <div>
          <label for="user_cc">Identificación del Usuario </label>

          <input
            type="text"
            id="user_cc"
            name="user_cc"
            placeholder="Ingrese número de identificación"
            required="true"
            value={DNI}
            onChange={(event) => setDNI(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_name">Nombre del Usuario </label>

          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Ingrese el nombre"
            required="true"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_lastname">Apellido del Usuario </label>

          <input
            type="text"
            id="user_lastname"
            name="user_lastname"
            placeholder="Ingrese el Apellido"
            required="true"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_email">Correo de contacto </label>

          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Ingrese el email del usuario"
            required="true"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_phone">Celular de contacto </label>

          <input
            type="text"
            id="user_phone"
            name="user_phone"
            placeholder="Ingrese el celular del usuario"
            required="true"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_department">Departamento </label>

          <input
            type="text"
            id="user_department"
            name="user_department"
            placeholder="Ingrese el departamento"
            required="true"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_city">Ciudad </label>

          <input
            type="text"
            id="user_city"
            name="user_city"
            placeholder="Ingrese la ciudad"
            required="true"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_address">Dirección </label>

          <input
            type="text"
            id="user_address"
            name="user_address"
            placeholder="Ingrese la dirección"
            required="true"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="comments_user"> Comentarios u observaciones </label>
          <textarea
            id="comments_user"
            name="comments_user"
            placeholder="Agregue acá sus comentarios"
            rows="5"
            cols="30"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          ></textarea>
        </div>

        <div className="Validated">
          <button type="submit" for="Shipping_info">
            Iniciar Solicitud
          </button>
        </div>
      </form>
    </div>
  );
}
