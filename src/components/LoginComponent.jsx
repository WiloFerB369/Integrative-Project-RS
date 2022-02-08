import "../css/LoginStyle.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [user, setUser] = useState("");
  const [userPass, setUserPass] = useState("");

  let nameActive ;
  let lastNameActive;
  let emailActive;
  let levelAccess;
  let Continued = false;

  const navigate = useNavigate();

  function handleValidatedChange() {
    const localData = JSON.parse(localStorage.getItem("Users"));
    let Continued = false;

    for (let i = 0; i < localData.length; i++) {
      if (
        user === localData[i].userNickName &&
        userPass === localData[i].password
      ) {
        Continued = true;
        nameActive = localData[i].userName;
        lastNameActive = localData[i].userLastName;
        emailActive = localData[i].userEmail;
        levelAccess = localData[i].userAccess;
      } 
    }

    if (Continued === true) {
      const userActive = {
        userName: nameActive,
        userLastName: lastNameActive,
        userEmail: emailActive,
        levelAccess: levelAccess,
        access: Continued
      };

      localStorage.setItem("userActive", JSON.stringify(userActive));

      if (levelAccess === "admin") {
        alert("Bienvenido " + nameActive + " " + lastNameActive);
        navigate("../Requests", { replace: true });
      } 
      else if (levelAccess === "standar") {
        alert("Bienvenido " + nameActive + " " + lastNameActive);
        navigate("../Form", { replace: true });
      } 
      else {
        alert("No tiene permisos para acceder");
        localStorage.removeItem("userActive");
      }
    } 
    else {
      alert("Los datos ingresados no corresponden a un Usuario");
    }
  }

  return (
    <div>
      <form>
        <div className="Login_form">
          <div className="Login_item">
            <input
              type="text"
              id="Username"
              name="Username"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="Username"
              required="true"
            ></input>
          </div>

          <div className="Login_item">
            <input
              type="password"
              id="pass"
              name="pass"
              value={userPass}
              onChange={(event) => setUserPass(event.target.value)}
              placeholder="Password"
              required="true"
            ></input>
          </div>
        </div>

        <div className="Login_Button">
          <input
            type="button"
            value="Enviar"
            onClick={handleValidatedChange}
          ></input>
        </div>
      </form>
    </div>
  );
}
