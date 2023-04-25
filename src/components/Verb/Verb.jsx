import React from "react";
import "./styles.scss";

export default function Verb() {
  return (
    <section className="verb">
      <div className="section-header">
        <h2>verb</h2>
        <div className="hdr-line"></div>
      </div>

      <div className="meaning-section">
        <h3>Meaning</h3>
        <ul>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>

      <h3>
        Synonims <span className="synonims">electronic keyboard</span>
      </h3>
    </section>
  );
}
