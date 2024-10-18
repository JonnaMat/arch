import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Deck from "./components/Deck";

function App() {
  const cards = [
    { title: "Card 1", content: "This is card 1 content." },
    { title: "Card 2", content: "This is card 2 content." },
    { title: "Card 3", content: "This is card 3 content." },
    { title: "Card 4", content: "This is card 4 content." },
    { title: "Card 5", content: "This is card 5 content." },
  ];
  return (
    <Router basename="/arch">
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <ThemeSwitcher />
                <LandingPage />
              </div>
            }
          />
          <Route
            path="/deck"
            element={
              <div>
                {" "}
                <ThemeSwitcher />
                <Deck cards={cards} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
