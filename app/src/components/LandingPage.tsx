import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const colors = [
    "var(--purple)",
    "var(--blue)",
    "var(--pink)",
    "var(--orange)",
    "var(--green)",
    "var(--yellow)",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  console.log("color", randomColor);

  return (
    <div className={styles.LandingPage}>
      <ThemeSwitcher />
      <h1 className={`${styles.MovingGradientText} ${styles.Title}`}>Arch</h1>
      <h2 className={`${styles.MovingGradientText} ${styles.Subtitle}`}>
        Lorem ipsum dolor sit amet!
      </h2>
      <h3 className={styles.Heading} style={{ color: randomColor }}>
        Discover
      </h3>
      <Link to="/blog" style={{ color: randomColor }}>
        Visit Blog
      </Link>
    </div>
  );
};

export default LandingPage;
