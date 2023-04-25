import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Noun from "./components/Noun/Noun";
import Verb from "./components/Verb/Verb";
import { useState } from "react";

function App() {
  const [outcome, setOutcome] = useState([]);
  return (
    <>
      <div className="main-container">
        <Navigation />
        <Hero setOutcome={setOutcome} />
        <Noun />
        <Verb />
        <Footer />
      </div>
    </>
  );
}

export default App;
