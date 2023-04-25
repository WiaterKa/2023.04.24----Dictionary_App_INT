import React from "react";
import "./styles.scss";

export default function Hero() {
  return (
    <section className="hero">
      <form>
        <input placeholder="Search for any word"></input>
        <img
          className="search-svg"
          src="src/assets/images/icon-search.svg"
          alt="search-icon"
        />
      </form>
      <div className="outcome-box">
        <div className="txt-box">
          <h1>keyboard</h1>
          <h2>/ˈkiːbɔːd/</h2>
        </div>
        <img src="src/assets/images/icon-play.svg" alt="play-img" />
      </div>
    </section>
  );
}
