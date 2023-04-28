import React from "react";
import OutcomeMeanings from "../OutcomeMeanings/OutcomeMeanings";
import Synonyms from "../Synonyms/Synonyms";
import "./styles.scss";

export default function Outcome({ outcome, darkFont }) {
  if (outcome.length > 0) {
    const listOfMeanings = outcome[0].meanings;

    return listOfMeanings.map((item) => {
      return (
        <section className="outcome" key={item.partOfSpeech}>
          <div className="section-header">
            <h2 type={darkFont ? "white" : ""}>{item.partOfSpeech}</h2>
            <div className="hdr-line"></div>
          </div>
          <OutcomeMeanings item={item} darkFont={darkFont} />
          <Synonyms item={item} />
        </section>
      );
    });
  }
}


