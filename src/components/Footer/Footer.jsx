import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 GICSA - Todos los derechos reservados</p>
        <div className="footer-contact">
          <p>Teléfono: +54 341 6440859</p>
          <p>Email: contacto@gicsaconsultora.com</p>
        </div>
        <div className="footer-social">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
