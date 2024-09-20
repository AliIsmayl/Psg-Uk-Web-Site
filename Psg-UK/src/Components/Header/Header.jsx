import React from "react";
import "./Header.scss";
import Image from "../../../Image/Header.jpg";

function Header() {
  return (
    <header style={{ backgroundImage: `url(${Image})` }}>
      <div className="backFont">
        <h1>Secure Your Business Success With Practical Solutions Group.</h1>
      </div>
    </header>
  );
}

export default Header;
