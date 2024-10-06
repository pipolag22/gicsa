import React from "react";
import "../App.css"; // Asegúrate de importar el CSS

const InfoSection = ({ images }) => {
  return (
    <div className="info-section">
      {images.map((image, index) => (
        <div className="info-block" key={index}>
          <img src={image.src} alt={image.alt} />
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
