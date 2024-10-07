import React from "react";
import "./Footer.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="upBox">
        <ul>
          <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
            <li>
              Home
            </li>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
            <li>
              About
            </li>
          </ScrollLink>
          <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
            <li>
              Service
            </li>
          </ScrollLink>
          <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
            <li>
              Contact
            </li>
          </ScrollLink>
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
            <p>+44 7799 360448</p>
          </div>
        </div>
        <p>Copyright © 2024 PSG-UK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
