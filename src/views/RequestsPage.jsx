
import "../css/FormStyle.css";
import { Link } from "react-router-dom";
import FormU from "../components/FormUsersComponent"

export default function RequestsPage() {
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
          <Link className="link" to="/FormUsers">
            Crear Usuario
          </Link>
          <Link className="link" to="/About">
            Acerca del Sistema
          </Link>
        </div>
      </header>
      <div>
 
      </div>
    </div>
  );
}
