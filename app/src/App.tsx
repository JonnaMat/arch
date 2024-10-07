import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <Router basename="/arch">
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/card"
            element={
              <div style={{ width: "300px" }}>
                <Card title="Title" content="hello" />
              </div>
            }
          />
          <Route path="/grid" element={<CardGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
