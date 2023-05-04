import React from "react";
import HeroAudioOutcome from "../HeroAudioOutcome/HeroAudioOutcome";

export default function HeroOutcome({ outcome, darkFont }) {
  if (outcome.length > 0) {

    return (
      <div className="outcome-box">
        <div className="txt-box">
          <h1 data-color={darkFont ? "white" : ""}>{outcome[0].word}</h1>
          <h2>{outcome[0].phonetic}</h2>
        </div>
        <HeroAudioOutcome outcome={outcome}/>

      </div>
    );
  }
}
