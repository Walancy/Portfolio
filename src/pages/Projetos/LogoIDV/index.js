import { Header } from "../../../components/Header/header";
import { Footer } from "../../../components/Footer/index";
import "./styles-responsive.css";
import "./style.css";

import {
  prata01,
  prata02,
  prata03,
  tatiana01,
  tatiana02,
  tatiana03,
  hunter01,
  hunter02,
  hunter03,
  agrous01,
  agrous02,
  agrous03,
  outby01,
  outby02,
  outby03,
  kuma01,
  kuma02,
  kuma03,
} from "./imports";

export const LogoIDV = () => {


  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="container">
        <div className="itens">
          <div className="linha" id="linha1">
            <div className="item"><img src={prata01} alt="Logo 1" /></div>
            <div className="item"><img src={prata02} alt="Logo 2" /></div>
            <div className="item"><img src={prata03} alt="Logo 3" /></div>
          </div>
          <div className="linha" id="linha2">
            <div className="item"><img src={tatiana01} alt="Logo 1" /></div>
            <div className="item"><img src={tatiana02} alt="Logo 1" /></div>
            <div className="item"><img src={tatiana03} alt="Logo 1" /></div>
          </div>
          <div className="linha" id="linha3">
            <div className="item"><img src={hunter01} alt="Logo 1" /></div>
            <div className="item"><img src={hunter02} alt="Logo 1" /></div>
            <div className="item"><img src={hunter03} alt="Logo 1" /></div>
          </div>
          <div className="linha" id="linha4">
            <div className="item"><img src={agrous01} alt="Logo 1" /></div>
            <div className="item"><img src={agrous02} alt="Logo 1" /></div>
            <div className="item"><img src={agrous03} alt="Logo 1" /></div>
          </div>
          <div className="linha" id="linha5">
            <div className="item"><img src={outby01} alt="Logo 1" /></div>
            <div className="item"><img src={outby02} alt="Logo 1" /></div>
            <div className="item"><img src={outby03} alt="Logo 1" /></div>
          </div>
          <div className="linha" id="linha6">
            <div className="item"><img src={kuma01} alt="Logo 1" /></div>
            <div className="item"><img src={kuma02} alt="Logo 1" /></div>
            <div className="item"><img src={kuma03} alt="Logo 1" /></div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};
