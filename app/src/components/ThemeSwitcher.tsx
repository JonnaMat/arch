import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./../images/sun.svg";
import { ReactComponent as Moon } from "./../images/moon.svg";
import styles from "./ThemeSwitcher.module.css";

const ReverseColorScheme = (scheme: string) => {
  if (scheme === "dark") {
    return "light";
  }
  return "dark";
};

const ThemeSwitcher = () => {
  const [colorScheme, setColorScheme] = useState<string>("dark");

  useEffect(() => {
    // dark color scheme by default
    document.documentElement.style.setProperty("color-scheme", "dark");
  }, []);

  return (
    <button
      className={styles.IconContainer}
      onClick={() => {
        document.documentElement.style.setProperty(
          "color-scheme",
          ReverseColorScheme(colorScheme)
        );
        setColorScheme(ReverseColorScheme(colorScheme));
      }}
    >
      {colorScheme === "dark" ? (
        <Sun className={styles.Icon} />
      ) : (
        <Moon className={styles.Icon} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
