import React from "react";
import "../App.css"; // Asegúrate de que este CSS esté correctamente enlazado
import bannerImage from "../assets/Banner youu tube-01.png"; // Ruta correcta de la imagen

const HeaderSection = () => {
  return (
    <div
      className="header-section"
      style={{ backgroundImage: `url(${bannerImage})` }}
    ></div>
  );
};

export default HeaderSection;
