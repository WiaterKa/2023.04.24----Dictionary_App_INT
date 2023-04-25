import React, { useState } from "react";

import "./styles.scss";

export default function Hero({ setOutcome }) {
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
            console.log(data[0].phonetic); //dochodzenie do poszczególnych właściwości elementu
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
