import "../App.css";
import bannerImage from "../assets/Banner youu tube-01.png";

const HeaderSection = () => {
  return (
    <div
      className="header-section"
      style={{ backgroundImage: `url(${bannerImage})` }}
    ></div>
  );
};

export default HeaderSection;
