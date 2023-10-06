import React, { useState } from "react";
import ModalContatos from "../ModalItens/modalItens";
import ModalPortfolio from "../ModalItens/modalItens";
import "./header.css";
import LogoHeader from "../../assets/logo.svg";

export const Header = () => {
  const [openContatos, setOpenContatos] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);

  const openModalPortfolio = () => {
    setOpenPortfolio(true);
  };

  const closeModalContatos = () => {
    setOpenContatos(false);
  };
  const closeModalPortfolio = () => {
    setOpenPortfolio(false);
  };

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
              <button>Sobre</button>
            </div>
            <div className="portfolio">
              <button onClick={openModalPortfolio}>Portfólio</button>
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
                    <button>WhatsApp</button>
                  </a>
                  <a
                    href="https://www.instagram.com/sant.dsg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <button>Instagram</button>
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
      <div className="headerModal">
        <div className="modalContatos">
          <ModalContatos isOpen={openContatos} onClose={closeModalContatos}>
            <a
              href="https://api.whatsapp.com/send/?phone=5544998043997"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <button>WhatsApp</button>
            </a>
            <a
              href="https://www.instagram.com/sant.dsg/"
              target="_blank"
              rel="noopener noreferrer"
              className="Instagram"
            >
              <button>Instagram</button>
            </a>
          </ModalContatos>
        </div>
        <div className="modalPortfolio">
          <ModalPortfolio isOpen={openPortfolio} onClose={closeModalPortfolio}>
            <a
              href="https://github.com/Walancy"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <button>GitHub</button>
            </a>
            <a
              href="https://www.behance.net/walancy_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="uxui"
            >
              <button>UX/UI</button>
            </a>
            <a
              href="https://www.behance.net/walancy_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="socialmedia"
            >
              <button>Social Media Design</button>
            </a>
            <a
              href="https://www.behance.net/walancy_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="logodesign"
            >
              <button>Logo Design</button>
            </a>
          </ModalPortfolio>
        </div>
      </div>
    </div>
  );
};
