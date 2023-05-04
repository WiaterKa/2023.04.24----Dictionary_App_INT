import React from "react";

export default function HeroAudioOutcome({ outcome }) {
  const url = outcome[0].phonetics.filter((item) => {
    return item.audio.includes("http");
  });

  if (url.length > 0) {
    const audio = new Audio(url[0].audio);

    const playAudio = () => {
      audio.play();
    };

    return <img src="/iconplay.svg" alt="play-audio" onClick={playAudio}></img>;
  }
}
