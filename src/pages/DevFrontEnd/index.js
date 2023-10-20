import { useNavigate } from "react-router-dom";
import "./style.css";
import { Header } from "../../../components/Header/header";

export const PaginaDesenvolvimento = () => {
  const navigate = useNavigate();

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
        <button onClick={() => navigate("/")}>Voltar ao Inicio</button>
      </section>
    </div>
  );
};
