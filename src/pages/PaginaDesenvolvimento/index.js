import "./style.css";
import { Header } from "../../components/Header/header";
import { Link } from "react-router-dom";

export const PaginaDesenvolvimento = () => {
  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="sessao01">
        <div className="aviso">
          <p>
            <span>
              Atenção<br></br>
            </span>
            Esta pagina está em desenvolvimento!
          </p>
        </div>
        <Link to="/"> {}
          <button>Voltar ao Inicio</button>
        </Link>
      </section>
    </div>
  );
};
