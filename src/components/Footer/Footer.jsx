import React from "react";
import "./styles.scss";

export default function Footer({ outcome }) {
  if (outcome.length > 0) {
    return (
      <section className="footer">
        <h4>Source</h4>
        <p className="source">{outcome[0].sourceUrls[0]}</p>
        <img src="src/assets/images/icon-new-window.svg" alt="open-source" />
      </section>
    );
  }
}
