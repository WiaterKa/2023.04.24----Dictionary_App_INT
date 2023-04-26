import React from "react";
import Example from "../Example/Example";

export default function OutcomeMeanings({ item }) {
  return (
    <div className="meaning-section">
      <h3>Meaning</h3>
      <ul>
        {item.definitions.map((item) => {
          return (
            <li key={item.definition}>
              {item.definition}
              <Example item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}