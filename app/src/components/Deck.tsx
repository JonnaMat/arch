import React from "react";
import Styles from "./Deck.module.css";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Card}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

interface DeckProps {
  cards: Array<CardProps>;
}

const Deck: React.FC<DeckProps> = ({ cards }) => {
  return (
    <div className={Styles.Deck}>
      {cards.map((card: CardProps, index: number) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default Deck;
