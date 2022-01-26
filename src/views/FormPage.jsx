import { Link } from "react-router-dom";
import '../css/FormStyle.css';
export default function FormPage() {
  return (
    <div className="App">
      <header>
        <Link to="/">Inicio</Link>
        <Link to="/About">Acerca del Sistema</Link>
      </header>
      <img src="./img/construccion.png"></img>
    </div>
  );
}
