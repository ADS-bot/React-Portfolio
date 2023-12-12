import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        ADS
      </a>
      <ul className="permanent__links">
        <li>
          <a href="#footer">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/ads_8228/">
          <FaInstagram />
        </a>
        <a href="https://x.com/ads_8228?t=AkCwohwO4AhNNGQc4h222w&s=09">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/arghadeep-saha-b20379255/">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;ADS. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
