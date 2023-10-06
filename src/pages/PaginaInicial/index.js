import "./style.css";
import PhotoshopIcon from "../../assets/Photoshop.svg";
import AfterEffectsIcon from "../../assets/AfterEffects.svg";
import IllustratorIcon from "../../assets/Illustrator.svg";
import CSSicon from "../../assets/CSS.svg";
import HTMLicon from "../../assets/HTML.svg";
import JavaScriptIcon from "../../assets/JavaScript.svg";
import ReactIcon from "../../assets/React.svg";
import FigmaIcon from "../../assets/Figma.svg";
import Perfil from "../../assets/Perfil.svg";
import { Header } from "../../components/Header/header";

export const PaginaInicial = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="inicio">
        <div className="inicio-box">
          <div className="frase">
            <a>
              Design e programação que contam histórias e <span className="gradiente-frase">conquistam corações.</span>
            </a>

            <hr className="separador" />
          </div>

          <div className="mensagem">
            <p>
              Estou ansioso para ouvir sua visão e transformá-la em designs excepcionais que deixarão uma marca eterna. Entre em contato comigo hoje e juntos daremos vida às suas ideias de forma única e memorável!
            </p>
          </div>
          <div className="contato">
            <a
              href="https://api.whatsapp.com/send/?phone=5544998043997"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <button className="botao">Entrar em contato</button>
            </a>
          </div>
          <div className="softwares">
            <div className="softwaresUso">
              <p>
                Softwares que uso:
              </p>
            </div>
            <div className="icones">
              <img src={PhotoshopIcon} alt="Photoshop" />
              <img src={AfterEffectsIcon} alt="After Effects" />
              <img src={IllustratorIcon} alt="Illustrator" />
              <img src={CSSicon} alt="CSS" />
              <img src={HTMLicon} alt="HTML" />
              <img src={JavaScriptIcon} alt="JavaScript" />
              <img src={ReactIcon} alt="React" />
              <img src={FigmaIcon} alt="Figma" />
            </div>
          </div>
        </div>
      </div>
      <div className="sobre-mim">
        <div className="sobre-esquerda">
          <div className="foto">
            <img src={Perfil} alt="Perfil" />
          </div>
          <div className="info">
            <div className="design"><span className="quatroAnos">+de 4 Anos<br></br> </span>de experiência com design.</div>
            <div className="programacao"><span className="doisAnos">+de 2 Anos<br></br> </span>de experiência com programação.</div>
          </div>
        </div>
        <div className="sobre-divisao">
          <hr className="sobre-div"></hr>
        </div>
        <div className="sobre-direita">
          <div className="texto">
            <a className="ola">Olá</a>
            <a>eu me chamo Walancy, e sou a mente criativa por trás da Sant ART. Com mais de quatro anos de experiência na área de design e mais de 2 anos como programador, minha jornada tem sido marcada por uma paixão inabalável por transformar ideias em realidade visual. Cada projeto é uma oportunidade de mergulhar no universo das formas, cores e conceitos do design e da programação, criando peças que não apenas agradam esteticamente, mas também contam histórias e provocam emoções. É um privilégio poder compartilhar essa jornada com clientes e colaboradores, buscando sempre inovação e excelência em cada criação.</a>
          </div>
        </div>
      </div>
      <div className="oQueFaco"></div>
      <div className="portfolio"></div>
      <div className="caixa"></div>
      <div className="habilidades"></div>
      <div className="padding"></div>
    </div>
  );
};
