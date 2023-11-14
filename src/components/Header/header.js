import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./styles-responsive.css";
import LogoHeader from "../../assets/logo.svg";

export const Header = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      document
        .getElementById("botaoSobreMim")
        .addEventListener("click", function () {
          document
            .getElementById("sobreMim")
            .scrollIntoView({ behavior: "smooth" });
        });

      return () => {
        document
          .getElementById("botaoSobreMim")
          .removeEventListener("click", function () {
            document
              .getElementById("sobreMim")
              .scrollIntoView({ behavior: "smooth" });
          });
      };
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      document
        .getElementById("botaoProjetos")
        .addEventListener("click", function () {
          document
            .getElementById("oQueFaco")
            .scrollIntoView({ behavior: "smooth" });
        });

      return () => {
        document
          .getElementById("botaoProjetos")
          .removeEventListener("click", function () {
            document
              .getElementById("oQueFaco")
              .scrollIntoView({ behavior: "smooth" });
          });
      };
    }
  }, []);

  useEffect(() => {
    document.getElementById("logoSant").addEventListener("click", function () {
      document
        .getElementById("inicioHeader")
        .scrollIntoView({ behavior: "smooth" });
    });

    return () => {
      document
        .getElementById("logoSant")
        .removeEventListener("click", function () {
          document
            .getElementById("inicioHeader")
            .scrollIntoView({ behavior: "smooth" });
        });
    };
  }, []);

  useEffect(() => {
    const voltarInicioButton = document.getElementById("inicio-header");
    const inicioHeaderElement = document.getElementById("inicioHeader");

    const scrollFunction = () => {
      inicioHeaderElement.scrollIntoView({ behavior: "smooth" });
    };

    if (voltarInicioButton && inicioHeaderElement) {
      voltarInicioButton.addEventListener("click", scrollFunction);
    }

    return () => {
      if (voltarInicioButton && inicioHeaderElement) {
        voltarInicioButton.removeEventListener("click", scrollFunction);
      }
    };
  }, []);

  return (
    <div className="headerSpace">
      <div className="Header">
        <div className="esquerda">
          <Link to="/">
            {" "}
            {}
            <div id="logoInicio" className="logo">
              <img
                src={LogoHeader}
                alt="logo"
                id="logoSant"
                className="logoSant"
              />
            </div>
          </Link>
        </div>
        <div className="meio">
          <div className="botoes">
            <div className="inicio-header">
              <Link to={"/"}>
                <button id="inicio-header" className="botao-inicio">
                  inicio
                </button>
              </Link>
            </div>
            <div className="sobre">
              <Link to={"/"}>
                <button id="botaoSobreMim" className="botao-sobre">
                  Sobre mim
                </button>
              </Link>
            </div>
            <div className="sobre">
              <Link to={"/"}>
                <button id="botaoProjetos" className="botao-sobre">
                  Projetos
                </button>
              </Link>
            </div>
            <div className="portfolioDropdown">
              <button className="botao-portfolio">Portfólios</button>
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
                    className="Behance"
                  >
                    <div>Behance</div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/walancy-h-f-dos-santos-5aa472198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Linkedin"
                  >
                    <div>Linkedin</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="contatoDropdown">
              <button className="botao-contatos">Contatos</button>
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
