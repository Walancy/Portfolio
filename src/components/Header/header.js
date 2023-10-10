import React, { useEffect } from 'react';
import "./header.css";
import LogoHeader from "../../assets/logo.svg";

export const Header = () => {
  useEffect(() => {
    document.getElementById('botaoSobreMim').addEventListener('click', function () {
      document.getElementById('sobreMim').scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      document.getElementById('botaoSobreMim').removeEventListener('click', function () {
        document.getElementById('sobreMim').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  useEffect(() => {
    document.getElementById('botaoProjetos').addEventListener('click', function () {
      document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      document.getElementById('botaoProjetos').removeEventListener('click', function () {
        document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  useEffect(() => {
    document.getElementById('logoInicio').addEventListener('click', function () {
      document.getElementById('inicioHeader').scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      document.getElementById('logoInicio').removeEventListener('click', function () {
        document.getElementById('inicioHeader').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <div className="headerSpace">
      <div className="Header">
        <div className="esquerda">
          <div id="logoInicio" className="logo">
            <img
              src={LogoHeader}
              alt="logo"
              className="logoSant"
            />
          </div>
        </div>
        <div className="meio">
          <div className="botoes">
            <div className="sobre">
              <button id="botaoSobreMim" className="botao-sobre">Sobre mim</button>
            </div>
            <div className="sobre">
              <button id="botaoProjetos" className="botao-sobre">Projetos</button>
            </div>
            <div className="portfolioDropdown">
              <button>Portfólios</button>
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
                    <div>Behance</div>
                  </a>
                  <a
                    href="https://www.behance.net/walancy_dsgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialmedia"
                  >
                    <div>Linkedin</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="contatoDropdown">
              <button>Contatos</button>
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
                  <a
                    href="mailto:walancyhfsantos@outlook.com"
                    className="email"
                  >
                    <div>Email</div>
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
