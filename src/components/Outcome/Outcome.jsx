import React from "react";
import OutcomeMeanings from "../OutcomeMeanings/OutcomeMeanings";
import Synonyms from "../Synonyms/Synonyms";
import "./styles.scss";

export default function Outcome({ outcome }) {
  if (outcome.length > 0) {
    const listOfMeanings = outcome[0].meanings;

    return listOfMeanings.map((item) => {
      return (
        <section className="outcome">
          <div className="section-header">
            <h2>{item.partOfSpeech}</h2>
            <div className="hdr-line"></div>
          </div>
          <OutcomeMeanings item={item} />
          <Synonyms item={item} />
        </section>
      );
    });
  }
}

//unique key to be addded
