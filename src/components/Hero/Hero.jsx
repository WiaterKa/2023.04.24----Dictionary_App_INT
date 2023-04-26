import React, { useState } from "react";
import HeroOutcome from "../HeroOutcome/HeroOutcome";

import "./styles.scss";

export default function Hero({ setOutcome, outcome }) {
  const [input, setInput] = useState("");

  async function getData() {
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    const response = await fetch(API);
    return response.json();
  }

  return (
    <section className="hero">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData().then((data) => {
            setOutcome(data);

          });
        }}
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search for any word"
          value={input}
        ></input>
        <img
          className="search-svg"
          src="src/assets/images/icon-search.svg"
          alt="search-icon"
        />
      </form>
      <HeroOutcome outcome={outcome} />
    </section>
  );
}
