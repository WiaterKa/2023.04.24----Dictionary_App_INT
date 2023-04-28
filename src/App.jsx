import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Outcome from "./components/Outcome/Outcome";
import { useState } from "react";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [outcome, setOutcome] = useState([]);
  const [globalFont, setGlobalFont] = useState("sans-serif");
  const [globalBcg, setGlobalBcg] = useState("dark");
  const [isDark, setIsDark] = useState("");
  const [darkFont, setDarkFont] = useState("");
  const [darkFontBox, setDarkFontBox] = useState("");

  return (
    <>
      <div className={globalFont} id={globalBcg ? "white" : "dark"}>
        <div className="main-container">
          <Navigation
            globalFont={globalFont}
            setGlobalFont={setGlobalFont}
            globalBcg={globalBcg}
            setGlobalBcg={setGlobalBcg}
            darkFont={darkFont}
            setDarkFont={setDarkFont}
            darkFontBox={darkFontBox}
            setDarkFontBox={setDarkFontBox}
          />
          <Hero
            setOutcome={setOutcome}
            outcome={outcome}
            isDark={isDark}
            setIsDark={setIsDark}
            darkFont={darkFont}
          />
          <NotFound outcome={outcome} darkFont={darkFont} />
          <Outcome outcome={outcome} darkFont={darkFont} />
          <Footer outcome={outcome} darkFont={darkFont} />
        </div>
      </div>
    </>
  );
}

export default App;
