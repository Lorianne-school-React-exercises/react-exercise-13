import React from "react";

function DisplayQuote(props) {
  return (
    props && (
      <div className="DisplayQuote">
        <div className="character-bg">
          <img src={props.image} alt={props.character} />

          <div className="text-container">
            "{props.quote}"
            <br />
            <br />
            <em>~ {props.character}</em>
          </div>
        </div>
      </div>
    )
  );
}

export default DisplayQuote;
