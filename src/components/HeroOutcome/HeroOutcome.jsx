import React from "react";

export default function HeroOutcome({ outcome }) {
  if (outcome.length > 0) {
    return (
      <div className="outcome-box">
        <div className="txt-box">
          <h1>{outcome[0].word}</h1>
          <h2>{outcome[0].phonetic}</h2>
          {console.log(outcome[0].phonetics[0].audio)}
        </div>
        <img src="src/assets/images/icon-play.svg" alt="play-img" />
      </div>
    );
  }
}

// do ogarnięcia nagranie