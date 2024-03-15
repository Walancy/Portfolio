import { Header } from "../../../components/Header/header";
import { Footer } from "../../../components/Footer/index";
import { Navbar } from "../../../components/Navbar";
import "./style.css";
import "./styles-responsive.css";


import Portfolio from "../../../assets/projetos/Portfólio.svg";
import emBreve01 from "../../../assets/projetos/emBreve01.svg";
import emBreve02 from "../../../assets/projetos/emBreve02.svg";
import emBreve03 from "../../../assets/projetos/emBreve03.svg";
import emBreve04 from "../../../assets/projetos/emBreve04.svg";

export const DevFrontEnd = () => {
  return (
    <div className="div-devFrontEnd">
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="frase">
        <Navbar />
        <p className="titulo">Dev. Front-End</p>
        <p className="sub-titulo">
          Abaixo estão alguns dos meus trabalhos como front-end, cada imagem é
          interativa, ou seja, redireciona para o link do projeto.
        </p>
      </section>
      <section className="container">
        <div className="itens">
          <div className="linha" id="linha1">
            <div className="item1">
              <a
                href="https://github.com/Walancy/Portifolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Portfolio} alt="projeto" />

              </a>
              <div className="text">
                <p className="item-titulo">Este portfólio.</p>
                <p className="item-descricao">
                  Um projeto feito totalmente em React, utilizando conceitos de
                  Design, programação e UX.
                </p>
              </div>
            </div>
            <div className="item2">
              <a
                href="https://github.com/Walancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emBreve01} alt="projeto" />

              </a>
              <div className="text">
                <p className="item-titulo">Em breve...</p>
                <p className="item-descricao">
                  Um novo projeto totalmente diferente e inovador, em breve...
                </p>
              </div>
            </div>
            <div className="item3">
              <a
                href="https://github.com/Walancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emBreve02} alt="projeto" />

              </a>
              <div className="text">
                <p className="item-titulo">Em breve...</p>
                <p className="item-descricao">
                  Um novo projeto totalmente diferente e inovador, em breve...
                </p>
              </div>
            </div>
            <div className="item4">
              <a
                href="https://github.com/Walancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emBreve03} alt="projeto" />

              </a>
              <div className="text">
                <p className="item-titulo">Em breve...</p>
                <p className="item-descricao">
                  Um novo projeto totalmente diferente e inovador, em breve...
                </p>
              </div>
            </div>
            <div className="item5">
              <a
                href="https://github.com/Walancy/Portifolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emBreve04} alt="projeto" />

              </a>
              <div className="text">
                <p className="item-titulo">Em breve...</p>
                <p className="item-descricao">
                  Um novo projeto totalmente diferente e inovador, em breve...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </section>

    </div>
  );
};
