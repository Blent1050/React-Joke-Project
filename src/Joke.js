import React from "react";

function Joke(props) {
  if (props.question === undefined) {
    return (
      <div className="jokes">
        <h2>{props.punchline}</h2>
      </div>
    );
  } else {
    return (
      <div className="jokes">
        <p>
          <strong>{props.question}</strong>
        </p>
        <p>{props.punchline}</p>
      </div>
    );
  }
}

export default Joke;
