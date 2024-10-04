import React from "react";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import Service from "../Components/Service/Service";
import Contact from "../Components/Contact/Contact";

function HomePage() {
  return (
    <>
      <div id="Home">
        <Header />
      </div>
      <div id="About">
        <AboutUs />
      </div>
      <div id="Service">
        <Service />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
