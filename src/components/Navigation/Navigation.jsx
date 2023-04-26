import React, { useState } from "react";
import "./styles.scss";

export default function Navigation({ setGlobalFont, setGlobalBcg, globalBcg }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  function isDark({ globalBcg }) {
    console.log(globalBcg);
    setGlobalBcg(!globalBcg);
  }

  return (
    <nav>
      <img src="src/assets/images/logo.svg" alt="logo" />

      <div className="nav-interaction-box">
        <div className="font-box">
          <div onClick={handleToggle} className="current-font font sans-serif">
            Sans serif
          </div>
          <img
            onClick={handleToggle}
            src="src/assets/images/icon-arrow-down.svg"
            alt="arrow-down"
          />
          <div className={isActive ? "font-choice-box" : "d-none"}>
            <p
              className="font sans-serif"
              onClick={() => {
                setGlobalFont("sans-serif");
              }}
            >
              Sans serif
            </p>
            <p
              className="font serif"
              onClick={() => {
                setGlobalFont("serif");
              }}
            >
              Serif
            </p>
            <p
              className="font mono"
              onClick={() => {
                setGlobalFont("mono");
              }}
            >
              Mono
            </p>
          </div>
        </div>

        <div className="display-manipulation-box">
          <div
            className="toggle-bar"
            onClick={() => {
              isDark();
            }}
          >
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <img src="src/assets/images/icon-moon.svg" alt="moon-svg" />
        </div>
      </div>
    </nav>
  );
}
