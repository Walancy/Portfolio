import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Header } from "../../../components/Header/header";
import { Footer } from "../../../components/Footer/index";
import {
  imagemFeed01,
  imagemFeed02,
  imagemFeed03,
  imagemFeed04,
  imagemFeed05,
  imagemFeed06,
  imagemFeed07,
  imagemFeed08,
  imagemFeed09,
  imagemFeed10,
  imagemFeed11,
  imagemFeed12,
  imagemFeed13,
  imagemFeed14,
  imagemFeed15,

  imagemStories01,
  imagemStories02,
  imagemStories03,
  imagemStories04,
  imagemStories05,
  imagemStories06,
  imagemStories07,
  imagemStories08,
  imagemStories09,
  imagemStories10,
} from './imports';

import "./style.css";

export const SocialMedia = () => {

  const [showFeed, setShowFeed] = useState(true);

  const handleFeedButtonClick = () => {
    setShowFeed(true);
  };

  const handleStoriesButtonClick = () => {
    setShowFeed(false);
  };




  return (
    <div>
      <section id="inicioHeader" className="header">
        <Header />
      </section>
      <section className="container-social-media">
        <div className="frase"><p><span>Social Media</span><br></br>Abaixo estão alguns dos meus trabalhos como social media designer. Para ver mais, acesse meu behance clicando em "Portfólios".</p></div>
        <div className="botoes">
          <button className="feed-button" onClick={handleFeedButtonClick}>Feed</button>
          <button className="stories-button" onClick={handleStoriesButtonClick}>Stories</button>
        </div>
        <div className="divisao">
          <hr></hr>
        </div>
        <CSSTransition
          in={showFeed}
          timeout={500}
          classNames="feed-transition"
          unmountOnExit
        >
          <div className={showFeed ? "itens-feed" : "itens-stories"}>
            <div className="linha" id="linha1">
              <div className="feed"><img src={imagemFeed01} alt="Descrição 1" /></div>
              <div className="feed"><img src={imagemFeed02} alt="Descrição 2" /></div>
              <div className="feed"><img src={imagemFeed03} alt="Descrição 3" /></div>
              <div className="feed"><img src={imagemFeed04} alt="Descrição 4" /></div>
              <div className="feed"><img src={imagemFeed05} alt="Descrição 5" /></div>
            </div>
            <div className="linha" id="linha2">
              <div className="feed"><img src={imagemFeed06} alt="Descrição 6" /></div>
              <div className="feed"><img src={imagemFeed07} alt="Descrição 7" /></div>
              <div className="feed"><img src={imagemFeed08} alt="Descrição 8" /></div>
              <div className="feed"><img src={imagemFeed09} alt="Descrição 9" /></div>
              <div className="feed"><img src={imagemFeed10} alt="Descrição 10" /></div>
            </div>
            <div className="linha" id="linha3">
              <div className="feed"><img src={imagemFeed11} alt="Descrição 11" /></div>
              <div className="feed"><img src={imagemFeed12} alt="Descrição 12" /></div>
              <div className="feed"><img src={imagemFeed13} alt="Descrição 13" /></div>
              <div className="feed"><img src={imagemFeed14} alt="Descrição 14" /></div>
              <div className="feed"><img src={imagemFeed15} alt="Descrição 15" /></div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!showFeed}
          timeout={500}
          classNames="stories-transition"
          unmountOnExit
        >
          <div className={!showFeed ? "itens-feed" : "itens-stories"}>
            <div className="linha" id="linha1">
              <div className="stories"><img src={imagemStories01} alt="Descrição 1" /></div>
              <div className="stories"><img src={imagemStories02} alt="Descrição 2" /></div>
              <div className="stories"><img src={imagemStories03} alt="Descrição 3" /></div>
              <div className="stories"><img src={imagemStories04} alt="Descrição 4" /></div>
              <div className="stories"><img src={imagemStories05} alt="Descrição 5" /></div>
            </div>
            <div className="linha" id="linha2">
              <div className="stories"><img src={imagemStories06} alt="Descrição 6" /></div>
              <div className="stories"><img src={imagemStories07} alt="Descrição 7" /></div>
              <div className="stories"><img src={imagemStories08} alt="Descrição 8" /></div>
              <div className="stories"><img src={imagemStories09} alt="Descrição 9" /></div>
              <div className="stories"><img src={imagemStories10} alt="Descrição 10" /></div>
            </div>
          </div>
        </CSSTransition>
      </section>
      <Footer />
    </div>
  );
};
