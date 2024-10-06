import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo chico.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#header-section" className="navbar-logo">
          <img src={logo} alt="GICSA Logo" className="navbar-logo-img" />
        </a>
        <ul className="navbar-menu">
          <li>
            <a href="#about-us">Quiénes Somos</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
