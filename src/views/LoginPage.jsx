import "../css/LoginStyle.css";
import { Link } from "react-router-dom";
import Login from "../components/LoginComponent";

export default function LoginPage() {
  return (
    <div>
      <header className="App_header">
        <Link to="/">
          <img src="./img/vass-logo.png" width="100px" />
        </Link>
        <div className="App_menu">
          <Link className="link" to="/">
            Inicio
          </Link>
          <Link className="link" to="/About">
            Acerca del Sistema
          </Link>
        </div>
      </header>
      <div className="Login_body">
        <h1> Sistema de Registro SOGAGEF </h1>
        <div className='Login_box'>
          <h2>Inicio de Sesión</h2>
          <Login />
        </div>
      </div>
    </div>
  );
}
