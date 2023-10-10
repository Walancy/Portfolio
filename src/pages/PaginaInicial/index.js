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
  const IconeLink = ({ src, alt, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );

  const ativarDesativarHr = (id) => {
    const hrElements = document.querySelectorAll(".conteudo hr");

    hrElements.forEach((hrElement) => {
      if (hrElement.id === id) {
        hrElement.classList.add("hr-anim");
        hrElement.style.display = "block";
      } else {
        hrElement.classList.remove("hr-anim");
        hrElement.style.display = "none";
      }
    });
  };

  // Chame a função para garantir que os elementos hr estejam inicialmente ocultos, exceto o primeiro
  document.addEventListener("DOMContentLoaded", () => {
    ativarDesativarHr("hr1");
  });

  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section id="PageInicio" className="inicio">
        <div className="inicio-box">
          <div className="frase">
            <p>
              Olá, eu me chamo Walancy e sou <br></br>
              <span className="gradiente-frase">designer e programador.</span>
              <hr className="separador" />
            </p>
          </div>

          <div className="mensagem">
            <p>
              Estou ansioso para ouvir sua visão e transformá-la em designs
              excepcionais que deixarão uma marca eterna. Entre em contato
              comigo hoje e juntos daremos vida às suas ideias de forma única e
              memorável!
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
              <p>Softwares e linguagens que uso:</p>
            </div>
            <div className="icones">
              <IconeLink
                src={FigmaIcon}
                alt="Figma"
                link="https://www.figma.com/"
              />
              <IconeLink
                src={PhotoshopIcon}
                alt="Photoshop"
                link="https://www.adobe.com/products/photoshop.html"
              />
              <IconeLink
                src={AfterEffectsIcon}
                alt="After Effects"
                link="https://www.adobe.com/products/aftereffects.html"
              />
              <IconeLink
                src={IllustratorIcon}
                alt="Illustrator"
                link="https://www.adobe.com/products/illustrator.html"
              />
              <IconeLink
                src={CSSicon}
                alt="CSS"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              />
              <IconeLink
                src={HTMLicon}
                alt="HTML"
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              />
              <IconeLink
                src={JavaScriptIcon}
                alt="JavaScript"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              />
              <IconeLink
                src={ReactIcon}
                alt="React"
                link="https://reactjs.org/"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="sobreMim" className="sobre-mim">
        <div className="sobre-esquerda">
          <div className="foto">
            <img src={Perfil} alt="Perfil" />
          </div>
          <div className="info">
            <div className="design">
              <span className="quatroAnos">
                +de 4 Anos<br></br>{" "}
              </span>
              de experiência <br></br>com design.
            </div>
            <div className="programacao">
              <span className="doisAnos">
                +de 2 Anos<br></br>{" "}
              </span>
              de experiência <br></br>com programação.
            </div>
          </div>
        </div>
        <div className="sobre-divisao">
          <hr className="sobre-div"></hr>
        </div>
        <div className="sobre-direita">
          <div className="texto">
            <p className="ola">Olá</p>
            <p>
              eu me chamo Walancy, e sou a mente criativa por trás da Sant ART.
              Com mais de quatro anos de experiência na área de design e mais de
              2 anos como programador, minha jornada tem sido marcada por uma
              paixão inabalável por transformar ideias em realidade visual. Cada
              projeto é uma oportunidade de mergulhar no universo das formas,
              cores e conceitos do design e da programação, criando peças que
              não apenas agradam esteticamente, mas também contam histórias e
              provocam emoções. É um privilégio poder compartilhar essa jornada
              com clientes e colaboradores, buscando sempre inovação e
              excelência em cada criação.
            </p>
          </div>
        </div>
      </section>
      <section className="oQueFaco">
        <div className="oQueFaco-esquerda">
          <p className="faco-frase01">
            O que <br></br>eu Faço?
          </p>

          <p className="faco-frase02">
            Transformo ideias em experiências visuais envolventes, combinando
            habilidades em código e estética.
            <span>
              <br></br>Cada projeto conta uma história e provoca emoções,
              criando um mundo digital belo e funcional. Vamos juntos construir
              um universo inspirador através do design e da programação.
            </span>
          </p>
        </div>
        <div className="oQueFaco-direita">
          <div className="bloco ">
            <hr className="barra"></hr>
            <p>
              <span className="bold">Dev. Front-end</span>Programo a estrutura
              front-end de um projeto, utilizando linguagens de programação
              como: html, css, js, react, etc.
            </p>
          </div>

          <div className="bloco">
            <hr className="barra"></hr>
            <p>
              <span className="bold">Social media.</span>Crio designs para redes
              sociais que dão vida e identidade para perfis.
            </p>
          </div>

          <div className="bloco">
            <hr className="barra"></hr>
            <p>
              <span className="bold">UX/UI Design.</span>Construo sites e
              protótipos visando a usabilidade e experiência do usuario.
            </p>
          </div>

          <div className="bloco">
            <hr className="barra"></hr>
            <p>
              <span className="bold">Motion Design.</span>Aplico vida e
              movimento à imagens e textos para criar videos, gifs e animações
              que chmam atenção.
            </p>
          </div>

          <div className="bloco">
            <hr className="barra"></hr>
            <p>
              <span className="bold">Logotipo e identidade visual.</span>
              Desenvolvo e aplico ideias que representam e dão vida ao rosto de
              projetos e empresas.
            </p>
          </div>
        </div>
      </section>
      <section id="projetos" className="projetos">
        <div className="titulo">
          <p>Meus projetos</p>
        </div>
        <div className="conteudo">
          <div className="botoes">
            <button className="botao" onClick={() => ativarDesativarHr("hr1")}>
              Sites
              <hr
                className="hr1 hr-anim"
                id="hr1"
                style={{ display: "none" }}
              ></hr>
            </button>
            <button className="botao" onClick={() => ativarDesativarHr("hr2")}>
              Social Mídia
              <hr
                className="hr2 hr-anim"
                id="hr2"
                style={{ display: "none" }}
              ></hr>
            </button>
            <button className="botao" onClick={() => ativarDesativarHr("hr3")}>
              UX/UI
              <hr
                className="hr3 hr-anim"
                id="hr3"
                style={{ display: "none" }}
              ></hr>
            </button>
            <button className="botao" onClick={() => ativarDesativarHr("hr4")}>
              ID. Visual
              <hr
                className="hr4 hr-anim"
                id="hr4"
                style={{ display: "none" }}
              ></hr>
            </button>
            <button className="botao" onClick={() => ativarDesativarHr("hr5")}>
              Motion
              <hr
                className="hr5 hr-anim"
                id="hr5"
                style={{ display: "none" }}
              ></hr>
            </button>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="caixa"></section>
      <section className="habilidades"></section>
      <section className="padding"></section>
    </div>
  );
};
