import React, { useState } from "react";
import HeroOutcome from "../HeroMainOutcome/HeroMainOutcome";

import "./styles.scss";

export default function Hero({ setOutcome, outcome, darkFont }) {
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
          onClick={() => {
            getData().then((data) => {
              setOutcome(data);
            });
          }}
          className="search-svg"
          src="/icon-search.svg"
          alt="search-icon"
        />
      </form>
      <HeroOutcome outcome={outcome} darkFont={darkFont} />
    </section>
  );
}
