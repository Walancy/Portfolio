import { Header } from "../../../components/Header/header";
import "./style.css"

export const DevFrontEnd = () => {


  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="container">
        <div className="itens">
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
        </div>
      </section>
    </div>
  );
};
