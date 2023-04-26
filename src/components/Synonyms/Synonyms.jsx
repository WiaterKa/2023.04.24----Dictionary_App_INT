import React from "react";

export default function Synonyms({ item }) {
  if (item.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <h3>Synonims</h3>
        <h3 className="h3-synonyms"> {item.synonyms.join(", ")}</h3>
      </div>
    );
  }
}
