import React, { useState } from "react";
import { Confirmation } from "./2_Confirmation";

/*
  The Question component should render the question, and a "Show answer" button.

  When clicked, the Show Answer button should result in the Confirmation being rendered,
  which should ask the user if they want to reveal the answer.

  The answer should only be revealed if "accept" is clicked.
  If "decline" is clicked, the Question component should go back to the initial state.
*/

interface Props {
  question: string;
  answer: string;
}

export function Question({ question, answer }: Props) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  
  return (
    <div className="question">
    <section className="section">{question}</section>

    {/* Show the "Show Answer" button if confirmation is not active and answer is not revealed */}
    {!isConfirming && !isRevealed && (
      <button onClick={() => setIsConfirming(true)}>Show Answer</button>
    )}

    {/* Show Confirmation when user clicks "Show Answer" */}
    {isConfirming && (
      <Confirmation
        message="Are you sure you want to reveal the answer?"
        type="caution"
        accept={() => {
          setIsRevealed(true); // ✅ Show the answer
          setIsConfirming(false); // ✅ Hide the confirmation
        }}
        decline={() => {
          setIsConfirming(false); // ✅ Hide confirmation
        }}
      />
    )}

    {/* Show the answer if accepted */}
    {isRevealed && (
      <>
        <p className="answer">{answer}</p>
        <button onClick={() => setIsRevealed(false)}>Hide Answer</button>
      </>
    )}
  </div>
  );
}
