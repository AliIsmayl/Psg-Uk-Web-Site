import React from "react";
import "./Footer.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="upBox">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="downBox">
        <div className="normalBox">
          <div className="iconBox">
            <div className="icon">
              <MdOutlineMail />
            </div>
            <p>info@psg-uk.com</p>
          </div>
          <div className="iconBox">
            <div className="icon">
              <FaPhone />
            </div>
            <p>1616165165165165</p>
          </div>
        </div>
        <p>Copyright © 2024 PSG-UK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
