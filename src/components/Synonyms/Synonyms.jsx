import React from "react";

export default function Synonyms({ item }) {
  if (item.synonyms.length > 0) {
    return (
      <h3>
        Synonims
        <span className="synonyms"> {item.synonyms.join(", ")}</span>
      </h3>
    );
  }
}
