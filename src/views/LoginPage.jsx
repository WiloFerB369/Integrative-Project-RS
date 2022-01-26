import "../css/LoginStyle.css";
import { Link } from "react-router-dom";
import Login from "../components/LoginComponent";

export default function LoginPage() {
  return (
    <div className='App'>
      <header>
        <Link to="/">Inicio</Link>
        <Link to="/About">Acerca del Sistema</Link>
      </header>
      <div>
        <h1>Sitema de Registro SOGAGEF</h1>
        <h2>Inicio de Sesión</h2>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
