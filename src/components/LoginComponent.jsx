import React, { useState } from "react";
import "../css/LoginStyle.css";

export default function LoginComponent() {
  const [user, setUser] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <div className='App'>
      <form>
        <label for="text">Usuario</label>
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Ingrese su Usuario"
        ></input>

        <label for="passowrd">Contraseña</label>
        <input
          type="password"
          value={userPass}
          onChange={(event) => setUserPass(event.target.value)}
          placeholder="Ingrese su contraseña"
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}