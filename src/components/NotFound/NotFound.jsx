import React from "react";
import "./styles.scss";

export default function NotFound({ outcome, darkFont }) {
  if (outcome.title === "No Definitions Found") {
    return (
      <div className="not-found-box">
        <div className="emoji">😕</div>
        <h2 data-color={darkFont ? "white" : ""}>No Definitions Found</h2>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  }
}
