import React from "react";
import HeaderSection from "./components/HeaderSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import bannerImage from "./assets/Banner youu tube-01.png";
import infoImages from "./assets/images";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection backgroundImage={bannerImage} />
      <InfoSection images={infoImages} />
      <Footer />
    </>
  );
}

export default App;
