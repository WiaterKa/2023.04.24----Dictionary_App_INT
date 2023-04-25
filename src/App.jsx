import React from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <Hero />
      </div>
    </>
  );
}

export default App;
