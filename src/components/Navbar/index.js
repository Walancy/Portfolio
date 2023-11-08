import "./style.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import WhatsApp from "../../assets/Navbar/Whatsapp.png";
import Instagram from "../../assets/Navbar/Instagram.svg";
import Home from "../../assets/Navbar/Home.svg";
import Behance from "../../assets/Navbar/Behance.svg";
import Github from "../../assets/Navbar/Github.svg";

export const Navbar = () => {
  const Icone = ({ src, alt, link }) => (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} />
    </a>
  );

useEffect(() => {
  const meioElement = document.getElementById("meio");
  const inicioElement = document.getElementById("PageInicio");

  if (meioElement && inicioElement) {
    const handleClick = () => {
      inicioElement.scrollIntoView({ behavior: "smooth" });
    };

    meioElement.addEventListener("click", handleClick);

    return () => {
      meioElement.removeEventListener("click", handleClick);
    };
  }
}, []);

  return (
    <div className="navegacao">
      <div className="botoes">
        <div className="botoes-esquerda">
          <Icone
            src={WhatsApp}
            alt="WhatsApp"
            link="https://api.whatsapp.com/send/?phone=5544998043997"
          ></Icone>
          <Icone
            src={Instagram}
            alt="Instagram"
            link="https://www.instagram.com/sant.dsg/"
          ></Icone>
        </div>
        <Link to="/">
          <div className="meio" id="meio">
            <Icone src={Home} alt="Home"></Icone>
          </div>
        </Link>
        <div className="botoes-direita">
          <Icone
            src={Behance}
            alt="Behance"
            link="https://www.behance.net/walancy_dsgn"
          ></Icone>
          <Icone
            src={Github}
            alt="Github"
            link="https://github.com/Walancy"
          ></Icone>
        </div>
      </div>
    </div>
  );
};
