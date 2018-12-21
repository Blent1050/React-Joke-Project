import React from "react";
import Joke from "./Joke";

function App() {
  return (
    <div className="App">
      <Joke punchline="Lunch and dinner." />
      <Joke
        question="What gets wetter the more it dries?"
        punchline="A towel."
      />
      <Joke
        question="What word is spelled incorrectly in every single dictionary?"
        punchline="Incorrectly."
      />
      <Joke
        question="What never asks a question but gets answered all the time?"
        punchline="Your cellphone."
      />
      <Joke
        question=" What goes up but never ever comes down?"
        punchline="Your age."
      />
    </div>
  );
}

export default App;
