import React from "react";
import "./styles.scss";

export default function Navigation() {
  return (
    <nav>
      <img src="src/assets/images/logo.svg" alt="logo" />

      <div className="nav-interaction-box">
        <div className="font-box">
          <div className="current-font font sans-serif">Sans serif</div>
          <img src="src/assets/images/icon-arrow-down.svg" alt="arrow-down" />
          <div className="font-choice-box">
            <p className="font sans-serif">Sans serif</p>
            <p className="font serif">Serif</p>
            <p className="font mono">Mono</p>
          </div>
        </div>
        <div className="display-manipulation-box">
          <div className="toggle-bar">
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
