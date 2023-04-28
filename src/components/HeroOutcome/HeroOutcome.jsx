import React from "react";

export default function HeroOutcome({ outcome, darkFont }) {
  if (outcome.length > 0) {
    console.log(outcome);
    console.log(outcome.length);

    const url = outcome[0].phonetics.filter((item) => {
      return item.audio.includes("http");
    });
    const audio = new Audio(url[0].audio);

    const playAudio = () => {
      audio.play();
    };

    return (
      <div className="outcome-box">
        <div className="txt-box">
          <h1 type={darkFont ? "white" : ""}>{outcome[0].word}</h1>
          <h2>{outcome[0].phonetic}</h2>
        </div>

        <img
          src="src/assets/images/icon-play.svg"
          onClick={playAudio}
          alt="play-img"
        />
      </div>
    );
  }
}

