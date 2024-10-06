import "../App.css";
import images from "../assets/images";

const InfoSection = () => {
  return (
    <div className="info-section">
      {images.map((image, index) => (
        <div className="info-item" key={index}>
          <img src={image.src} alt={image.alt} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
