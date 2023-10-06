import React from "react";
import "./header.css";
import LogoHeader from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="headerSpace">
      <div className="Header">
        <div className="esquerda">
          <div className="logo">
            <img src={LogoHeader} alt="logo" style={{ width: 150 }} />
          </div>
        </div>
        <div className="meio">
          <div className="botoes">
            <div className="sobre">
              <button>Sobre mim</button>
            </div>
            <div className="portfolioDropdown">
              <button>Portfólio</button>
              <div className="portfolio-menu">
                <div className="portfolio-botoes">
                  <a
                    href="https://github.com/Walancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <div>GitHub</div>
                  </a>
                  <a
                    href="https://www.behance.net/walancy_dsgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uxui"
                  >
                    <div>UX/UI</div>
                  </a>
                  <a
                    href="https://www.behance.net/walancy_dsgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialmedia"
                  >
                    <div>Social Media</div>
                  </a>
                  <a
                    href="https://www.behance.net/walancy_dsgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logodesign"
                  >
                    <div>Logo Design</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="behance">
              <a
                href="https://www.behance.net/walancy_dsgn"
                target="_blank"
                rel="noopener noreferrer"
                className="behance"
              >
                <button>Behance</button>
              </a>
            </div>
            <div className="contatoDropdown">
              <button>Contato</button>
              <div className="contato-menu">

                <div className="contato-botoes">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5544998043997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                  >
                    <div>WhatsApp</div>
                  </a>
                  <a
                    href="https://www.instagram.com/sant.dsg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <div>Instagram</div>
                  </a>
                </div>
              </div>
            </div>
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
