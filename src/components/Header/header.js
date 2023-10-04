import React from "react";
import "./header.css";
import LogoHeader from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div>
      <div className="Header">
        
        <div className="esquerda">
          <div className="logo">
            <img src={LogoHeader} alt="logo" style={{width:150}}/>
          </div>
        </div>

        <div className="meio">
          <div className="botoes">
            <button>Sobre</button>
            <button>Portfólio</button>
            <a
              href="https://www.behance.net/walancy_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="behance"
            >
              <button>Behance</button>
            </a>

            <button>Contato</button>
          </div>
        </div>

        <div className="direita">
          <a
              href="https://api.whatsapp.com/send/?phone=5544998043997"
              target="_blank"
              rel="noopener noreferrer"
              className="contrate"
            >
            <button>Me contrate</button>
          </a>
        </div>

      </div>
    </div>
  );
};
