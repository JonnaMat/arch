import styles from "./App.module.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className={styles.App}>
      Arch
      <ThemeSwitcher />
    </div>
  );
}

export default App;
