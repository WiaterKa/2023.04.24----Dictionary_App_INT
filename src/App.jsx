import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Outcome from "./components/Outcome/Outcome";
import { useState } from "react";

function App() {
  const [outcome, setOutcome] = useState([]);
  const [globalFont, setGlobalFont] = useState("sans-serif");
  const [globalBcg, setGlobalBcg] = useState("white");

  return (
    <>
      <div className={globalFont} id={globalBcg ? "white" : "dark"}>
        <div className="main-container">
          <Navigation
            setGlobalFont={setGlobalFont}
            setGlobalBcg={setGlobalBcg}
            globalBcg={globalBcg}
          />
          <Hero setOutcome={setOutcome} outcome={outcome} />
          <Outcome outcome={outcome} />
          <Footer outcome={outcome} />
        </div>
      </div>
    </>
  );
}

export default App;
