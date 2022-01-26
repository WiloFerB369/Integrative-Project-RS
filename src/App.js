import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './views/AboutPage';
import Form from './views/FormPage';
import Home from './views/HomePage';
import Login from './views/LoginPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About/>}/>  
        <Route path="/Form" element={<Form/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <footer clasName='App-footer'>
        <a href='https://www.linkedin.com/in/wiloferb/' target='_blank' rel='noopener noreferrer'>
          Diseño por: Wiloferb
        </a>

        <a href='https://vasscompany.com/' target='_blank' rel='noopener noreferrer'>
          VASS | Soluciones Digitales | COMPLEX MADE SIMPLE
        </a>
      </footer>
    </Router>
  );
}