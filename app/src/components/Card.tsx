import React from "react";
import Styles from "./Card.module.css";

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

export default Card;
