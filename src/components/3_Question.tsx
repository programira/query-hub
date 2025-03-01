import React, { useState } from "react";
import { Confirmation } from "./2_Confirmation";
import { QuestionProps } from "../types/question";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

/*
  The Question component should render the question, and a "Show answer" button.

  When clicked, the Show Answer button should result in the Confirmation being rendered,
  which should ask the user if they want to reveal the answer.

  The answer should only be revealed if "accept" is clicked.
  If "decline" is clicked, the Question component should go back to the initial state.
*/

// interface Props {
//   question: string;
//   answer: string;
// }

export function Question({ question, answer }: QuestionProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2">
          {question}
        </Typography>

        {/* Show the "Show Answer" button if confirmation is not active and answer is not revealed */}
        {!isConfirming && !isRevealed && (
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => setIsConfirming(true)}
            aria-label="Show Answer"
          >
            Show Answer
          </Button>
        )}

        {/* Show Confirmation when user clicks "Show Answer" */}
        {isConfirming && (
          <Box
            sx={{
              marginTop: 2,
              padding: 2,
              backgroundColor: "#F0F0F0",
              borderRadius: 1,
            }}>
            <Confirmation
              message="Are you sure you want to reveal the answer?"
              type="caution"
              accept={() => {
                setIsRevealed(true);
                setIsConfirming(false);
              }}
              decline={() => {
                setIsConfirming(false);
              }}
            />
          </Box>
        )}

        {/* Show the answer if accepted */}
        {isRevealed && (
          <Box
            sx={{
              marginTop: 2,
              padding: 2,
              backgroundColor: "#F0F0F0",
              borderRadius: 1,
            }}
          >
            <Typography variant="body1" role="alert">{answer}</Typography>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginTop: 1 }}
              onClick={() => setIsRevealed(false)}
              aria-label="Hide Answer"
            >
              Hide Answer
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
