import React, { useEffect } from "react";
import "./style.css";
import "./styles-responsive.css";

import PhotoshopIcon from "../../assets/Photoshop.svg";
import AfterEffectsIcon from "../../assets/AfterEffects.svg";
import IllustratorIcon from "../../assets/Illustrator.svg";
import CSSicon from "../../assets/CSS.svg";
import HTMLicon from "../../assets/HTML.svg";
import JavaScriptIcon from "../../assets/JavaScript.svg";
import ReactIcon from "../../assets/React.svg";
import FigmaIcon from "../../assets/Figma.svg";

import Linkedin from "../../assets/SessãoConectar/Linkedin.svg";
import Instagram from "../../assets/SessãoConectar/Instagram.svg";
import GitHub from "../../assets/SessãoConectar/GitHub.svg";
import WhatsApp from "../../assets/SessãoConectar/WhatsApp.svg";
import Behance from "../../assets/SessãoConectar/Behance.svg";

import Perfil from "../../assets/Perfil.svg";
import Web from "../../assets/web.svg";
import UXart from "../../assets/UXart.svg";
import Logofolio from "../../assets/Logofolio.svg";
import SocialMedia from "../../assets/SocialMidia.svg";
import MotionGIF from "../../assets/motion.gif";

import { Header } from "../../components/Header/header";


export const PaginaInicial = () => {
  const IconeLink = ({ src, alt, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );

  useEffect(() => {
    document
      .getElementById("voltar-inicio")
      .addEventListener("click", function () {
        document
          .getElementById("inicioHeader")
          .scrollIntoView({ behavior: "smooth" });
      });

    return () => {
      document
        .getElementById("voltar-inicio")
        .removeEventListener("click", function () {
          document
            .getElementById("inicioHeader")
            .scrollIntoView({ behavior: "smooth" });
        });
    }
  });

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
            <p className="texto-sobre">
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
      <section className="oQueFaco" id="oQueFaco">
        <div className="frases">
          <p className="titulo">O que eu faço?</p>
          <p className="texto">Minha paixão reside em dar vida a conceitos através de experiências visuais que transcendem o comum. Uma fusão única de habilidades em código e sensibilidade estética me permite criar obras que não só são funcionais, mas também verdadeiramente envolventes.
            <span>Cada projeto é uma oportunidade de contar uma história, de imergir em um universo de emoções e conexões. Trabalho incansavelmente para forjar um mundo digital que não apenas deslumbra com sua beleza, mas também impacta com sua eficiência.</span></p>
        </div>
        <div className="caixas" id="caixas">
          <div className="caixa" id="dev-frontend">
            <hr className="forma"></hr>
            <div className="texto">
              <span className="titulo">Dev. Front-end<br></br></span>
              <span>Tenho experiência e habilidades no desenvolvimento da estrutura front-end de projetos, empregando diversas linguagens de programação, tais como HTML, CSS, JavaScript, React, entre outras. Além disso, estou apto a criar interfaces atraentes e funcionais, garantindo uma experiência de usuário intuitiva e envolvente.</span>
              Estou sempre atualizado com as melhores práticas e tendências do mercado, buscando proporcionar resultados de alta qualidade e desempenho para os projetos em que trabalho
            </div>
            <img src={Web} alt="projeto" className="projeto" />
            <div className="botao">
              <button>
                <p>Ver projetos</p>
              </button>
            </div>
          </div>
          <div className="caixa" id="ux/ui">
            <hr className="forma"></hr>
            <div className="texto">
              <span className="titulo">UX/UI Design.<br></br></span>
              <span>Tenho expertise na construção de sites e protótipos, com foco primordial na usabilidade e na experiência do usuário. Através de uma abordagem centrada no usuário, desenvolvo interfaces intuitivas e funcionais, buscando proporcionar uma navegação fluida e agradável. Meu objetivo é criar plataformas que não apenas impressionem visualmente, mas também ofereçam uma experiência envolvente e satisfatória para os visitantes.</span>

            </div>

            <img src={UXart} alt="projeto" className="projeto" />

            <div className="botao">
              <button>
                <p>Ver projetos</p>
              </button>
            </div>
          </div>
          <div className="caixa" id="Logotipo">
            <hr className="forma"></hr>
            <div className="texto">
              <span className="titulo">Logotipo e identidade visual.<br></br></span>
              Sou especializado em conceber e implementar ideias que não apenas representam, mas também conferem uma identidade vibrante e distintiva aos projetos e empresas. Minha abordagem criativa visa não apenas criar designs, mas também contar histórias visuais que ressoam com o público-alvo. Cada projeto é uma oportunidade de dar forma e personalidade à marca, proporcionando uma presença marcante e duradoura no mercado.
            </div>
            <img src={Logofolio} alt="projeto" className="projeto" />

            <div className="botao">
              <button>
                <p>Ver projetos</p>
              </button>
            </div>
          </div>
          <div className="caixa" id="SocialMedia">
            <hr className="forma"></hr>
            <div className="texto">
              <span className="titulo">Social media.<br></br></span>
              Desenvolvo designs exclusivos e impactantes para redes sociais, proporcionando uma identidade única e envolvente para perfis online. Meu trabalho visa não apenas atrair a atenção, mas também criar uma experiência visual que realmente represente a essência e a mensagem de cada perfil. Utilizo técnicas e criatividade para dar vida às plataformas, garantindo uma presença online marcante e memorável.
            </div>
            <img src={SocialMedia} alt="projeto" className="projeto" />

            <div className="botao">
              <button>
                <p>Ver projetos</p>
              </button>
            </div>
          </div>
          <div className="caixa" id="MotionDesign">
            <hr className="forma"></hr>
            <div className="texto">
              <span className="titulo">Motion Design.<br></br></span>
              Utilizo minha habilidade para infundir vida e movimento em imagens e textos, resultando na criação de vídeos, GIFs e animações que capturam imediatamente a atenção do espectador. Minha expertise reside em transformar conceitos estáticos em experiências visuais dinâmicas e envolventes. Cada projeto é uma oportunidade de criar conteúdos visuais memoráveis e impactantes, garantindo uma presença marcante e diferenciada.
            </div>
            <img src={MotionGIF} alt="projeto" className="projeto" />

            <div className="botao">
              <button>
                <p>Ver projetos</p>
              </button>
            </div>
          </div>
        </div>

      </section>
      <section className="habilidades">
        <div className="texto">
          <p><span>Minhas habilidades<br></br></span>
            Ao longo desses anos, tive o privilégio de mergulhar em diversos campos da tecnologia e do design, o que me proporcionou a chance de explorar uma ampla variedade de ferramentas e linguagens. Como resultado, adquiri conhecimento e experiência em áreas que vão desde o desenvolvimento de software até a criação visual, incluindo, mas não se limitando a, aquelas mencionadas a seguir.</p>
        </div>
        <div className="items">
          <div className="part1">
            <div className="part-item">
              <div>
                <img src={FigmaIcon} className="icon" />
              </div>
              <div>
                <p><span>Figma<br></br></span>
                  + de 3 anos de experiência.</p>
              </div>
            </div>
            <div className="part-item">
              <div>
                <img src={ReactIcon} className="icon" />
              </div>
              <div>
                <p><span>React<br></br></span>
                  + de 2 anos de experiência.</p>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="part-item">
              <div>
                <img src={PhotoshopIcon} className="icon" />
              </div>
              <div>
                <p><span>Photoshop<br></br></span>
                  + de 5 anos de experiência.</p>
              </div>
            </div>
            <div className="part-item">
              <div>
                <img src={JavaScriptIcon} className="icon" />
              </div>
              <div>
                <p><span>JavaScript<br></br></span>
                  + de 2 anos de experiência.</p>
              </div>
            </div>
          </div>
          <div className="part1">
            <div className="part-item">
              <div>
                <img src={AfterEffectsIcon} className="icon" />
              </div>
              <div>
                <p><span>After Effects<br></br></span>
                  + de 4 anos de experiência.</p>
              </div>
            </div>
            <div className="part-item">
              <div>
                <img src={CSSicon} className="icon" />
              </div>
              <div>
                <p><span>CSS<br></br></span>
                  + de 2 anos de experiência.</p>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="part-item">
              <div>
                <img src={IllustratorIcon} className="icon" />
              </div>
              <div>
                <p><span>Illustrator<br></br></span>
                  + de 1 ano de experiência.</p>
              </div>
            </div>
            <div className="part-item">
              <div>
                <img src={HTMLicon} className="icon" />
              </div>
              <div>
                <p><span>HTML<br></br></span>
                  + de 2 anos de experiência.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="voltar-inicio">
          <button id="voltar-inicio">Voltar ao inicio.</button>
        </div>
      </section>
      <section className="conectar">
        <p className="frase">Vamos nos conectar!</p>
        <div className="icones">
          <IconeLink src={Linkedin} alt="icon" className="icon" link="https://www.linkedin.com/in/walancy-h-f-dos-santos-5aa472198/" />
          <IconeLink src={Instagram} alt="icon" className="icon" link="https://www.instagram.com/sant.dsg/" />
          <IconeLink src={GitHub} alt="icon" className="icon" link="https://github.com/Walancy" />
          <IconeLink src={WhatsApp} alt="icon" className="icon" link="https://api.whatsapp.com/send/?phone=5544998043997" />
          <IconeLink src={Behance} alt="icon" className="icon" link="https://www.behance.net/walancy_dsgn" />
        </div>
        <div className="forma">
          <div className="conectar-frase">
            <span>Atenção.<br></br></span>
            <br></br>Não perca mais tempo, fale comigo ainda<br></br>
            hoje e vamos desenvolver e aplicar sua ideia!
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5544998043997"
            target="_blank"
            rel="noopener noreferrer"
            className="contate"
          >
            <button>Contate-me</button>
          </a>
        </div>
      </section>
      <section className="padding">
        <a>© 2023 Walancy Heleonai Ferreira dos Santos. <span>Todos os direitos reservados.</span></a>
      </section>
    </div>
  );
};
