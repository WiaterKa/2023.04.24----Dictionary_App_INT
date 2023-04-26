import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Outcome from "./components/Outcome/Outcome";
import { useState } from "react";

function App() {
  const [outcome, setOutcome] = useState([]);
  return (
    <>
      <div className="main-container">
        <Navigation />
        <Hero setOutcome={setOutcome} outcome={outcome} />
        <Outcome outcome={outcome} />
        <Footer outcome={outcome} />
      </div>
    </>
  );
}

export default App;
