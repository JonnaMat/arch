// CardGrid.tsx
import React from "react";
import Card from "./Card";
import styles from "./CardGrid.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

interface CardData {
  title: string;
  content: string;
}

const CardGrid = () => {
  const cards: CardData[] = [
    { title: "Card 1", content: "This is card 1 content." },
    { title: "Card 2", content: "This is card 2 content." },
    { title: "Card 3", content: "This is card 3 content." },
    { title: "Card 4", content: "This is card 4 content." },
    { title: "Card 5", content: "This is card 5 content." },
  ];

  return (
    <div className={styles.Grid}>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardGrid;
