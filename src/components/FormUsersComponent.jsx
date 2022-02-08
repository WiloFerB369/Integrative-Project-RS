import "../css/FormStyle.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormUsersComponent() {
  const [nickName, setNickName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  function handleSubmitChange() {
    if (password2 === password) {
      const info_Users = [
        {
          userNickName: nickName,
          userName: name,
          userLastName: lastName,
          userEmail: email,
          password: password,
          password2: password2,
          userAccess: access
        }
      ];

      //Validamos si ya existe la lista de Usuarios en LS
      let recoverdData = localStorage.getItem("Users");

      if (recoverdData == null) {
        //No hay nada guardado, por tanto se crea la lista
        localStorage.setItem("Users", JSON.stringify(info_Users));
      } else {
        //Existe la lista de Users en el LS
        let data = JSON.parse(recoverdData);
        let newUser = info_Users[0];
        //Añadimos el nuevo usuario a la lista Users
        data.push(newUser);
        //guardamos la lista actualizada en el LS
        localStorage.setItem("Users", JSON.stringify(data));
      }

      alert("Usuario Creado con Exito!");
      navigate("../FormUsers", { replace: true });
    } else {
      alert("Las contraseñas no coinciden!!! Intente nuevamente");
    }
  }

  return (
    <div className="Container">
      <form onSubmit={handleSubmitChange} method="GET">
        <h2>Información de Nuevo Usuario</h2>
        <div>
          <label for="user_nickname">Alias del usuario </label>
          <input
            type="text"
            id="user_nickname"
            name="user_nickname"
            placeholder="Ingrese el nombre de usuario"
            required="true"
            value={nickName}
            onChange={(event) => setNickName(event.target.value)}
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
          <label for="user_pass">Contraseña</label>

          <input
            type="password"
            id="user_pass"
            name="user_pass"
            placeholder="Ingrese una contraseña"
            required="true"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="user_pass2">Repita la Contraseña</label>

          <input
            type="password"
            id="user_pass2"
            name="user_pass2"
            placeholder="Repita la contraseña"
            required="true"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          ></input>
        </div>

        <div>
          <label>Nivel de Permisos</label>
          <div className="RadioB">
            <input
              type="radio"
              id="admin_access"
              name="user_access"
              value="admin"
              required="true"
              onChange={(event) => setAccess(event.target.value)}
            ></input>
            <label for="admin_access">Administrador</label>

            <input
              type="radio"
              id="standar_access"
              name="user_access"
              value="standar"
              required="true"
              onChange={(event) => setAccess(event.target.value)}
            ></input>
            <label for="standar_access">Estandar</label>
          </div>
        </div>

        <div className="Validated">
          <button type="submit" for="Shipping_info">
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
}
