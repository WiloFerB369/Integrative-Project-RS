import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/AboutPage";
import Form from "./views/FormPage";
import Home from "./views/HomePage";
import Login from "./views/LoginPage";
import FormUsers from "./views/FormUsersPage";
import Requests from "./views/RequestsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FormUsers" element={<FormUsers/>}></Route>
        <Route path="/Requests" element={<Requests/>}></Route>
      </Routes>
      <footer className="App_footer">
        <div className='Container_Footer'>
          <a
            href="https://www.linkedin.com/in/wiloferb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diseño por: Wiloferb
          </a>

          <a
            href="https://vasscompany.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VASS | Soluciones Digitales | COMPLEX MADE SIMPLE
          </a>
        </div>
      </footer>
    </Router>
  );
}
