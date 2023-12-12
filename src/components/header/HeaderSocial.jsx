import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/arghadeep-saha-b20379255/"
        target="__balnk">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ADS-bot" target="__balnk">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/ads_8228/" target="__balnk">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
