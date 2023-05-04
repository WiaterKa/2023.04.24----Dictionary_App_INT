import React, { useState } from "react";
import "./styles.scss";

export default function Navigation({
  globalFont,
  setGlobalFont,
  setGlobalBcg,
  globalBcg,
  darkFont,
  setDarkFont,
  darkFontBox,
  setDarkFontBox,
}) {
  const [isActive, setActive] = useState("font-choice-box");
  const [currentFont, setCurrentFont] = useState("Sans serif");

  const handleToggle = () => {
    setActive(!isActive);
  };

  function isDark() {
    setGlobalBcg(!globalBcg);
    setDarkFont(!darkFont);
    setDarkFontBox(!darkFontBox);
  }

  return (
    <nav>
      <img src="/logo.svg" alt="logo" />

      <div className="nav-interaction-box">
        <div className="font-box">
          <div
            onClick={handleToggle}
            className={`current-font font ${globalFont}`}
            type={darkFont ? "white" : ""}
          >
            {currentFont}
          </div>
          <img
            onClick={handleToggle}
            src="/icon-arrow-down.svg"
            alt="arrow-down"
          />
          <div
            datatype={darkFontBox ? "dark-font-box" : ""}
            className={isActive ? "d-none" : "font-choice-box"}
          >
            <p
              type={darkFont ? "white" : ""}
              className="font sans-serif"
              onClick={() => {
                handleToggle();
                setGlobalFont("sans-serif");
                setCurrentFont("Sans serif");
              }}
            >
              Sans serif
            </p>
            <p
              type={darkFont ? "white" : ""}
              className="font serif"
              onClick={() => {
                setGlobalFont("serif");
                setCurrentFont("Serif");
                handleToggle();
              }}
            >
              Serif
            </p>
            <p
              type={darkFont ? "white" : ""}
              className="font mono"
              onClick={() => {
                setGlobalFont("mono");
                setCurrentFont("Mono");
                handleToggle();
              }}
            >
              Mono
            </p>
          </div>
        </div>

        <div className="display-manipulation-box">
          <div className="toggle-bar">
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => {
                  isDark();
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="currentColor"
              // stroke-linecap="round" stroke-linejoin="round"
              // stroke-width="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
