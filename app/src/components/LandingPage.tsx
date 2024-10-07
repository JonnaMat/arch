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
      <div className={styles.Intro}>
        <h1
          className={`${styles.GradientText} ${styles.MovingGradientBackground} ${styles.Title}`}
        >
          Arch
        </h1>
        <h2
          className={`${styles.GradientText} ${styles.MovingGradientBackground} ${styles.Subtitle}`}
        >
          Lorem ipsum dolor sit amet!
        </h2>
      </div>
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
