import { Header } from "../../../components/Header/header";
import { Footer } from "../../../components/Footer/index";
import { Navbar } from "../../../components/Navbar";

import "./style.css";
import "./styles-responsive.css"

import imagem01 from "../../../assets/uxui/Rectangle 102.svg";
import imagem02 from "../../../assets/uxui/Rectangle 103.svg";
import imagem03 from "../../../assets/uxui/Rectangle 104.svg";
import imagem04 from "../../../assets/uxui/Rectangle 105.svg";

export const UxUi = () => {
  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="ux-container">
        <Navbar />
        <div className="frase">
          <p>
            <span>
              UX UI Design.<br></br>
            </span>
            Abaixo estão alguns dos meus trabalhos como web-designer, cada
            imagem é interativa, ou seja, redireciona para o link do projeto.
          </p>
        </div>
        <div className="itens">
          <div className="linha">
            <a href="https://www.figma.com/proto/m7792S2ZjmmtNKZgL2vVWM/Untitled?type=design&node-id=6-65&t=oaExhMm47Robtduk-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=6%3A65&hide-ui=1"><img src={imagem01} alt="Descrição da Imagem 01" /></a>
            <a href="https://www.figma.com/proto/DVw4WivuY6aNoSUqLi9GnG/Untitled?type=design&node-id=212-2&t=oaExhMm47Robtduk-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=234%3A51&prev-org-id=external-teams"><img src={imagem02} alt="Descrição da Imagem 02" /></a>
            <a href="https://www.figma.com/proto/zHD582HDU23kDABavJpGLz/Untitled?type=design&node-id=194-255&t=oaExhMm47Robtduk-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=194%3A255"><img src={imagem03} alt="Descrição da Imagem 03" /></a>
            <a href="https://www.figma.com/proto/RkN2kxEYNH2fuNKDXvj3rg/Genius?type=design&node-id=96-2&t=oaExhMm47Robtduk-0&scaling=min-zoom&page-id=93%3A2&starting-point-node-id=93%3A3"><img src={imagem04} alt="Descrição da Imagem 04" /></a>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
};
