import React from "react";
import { Container, Box } from "@mui/material";
import { QuestionList } from "./components/4_QuestionList";
import "./styles.scss";

export const questions = [
  {
    id: 0,
    question: "What are the first 10 digits of PI?",
    answer: "3.141592653"
  },
  {
    id: 1,
    question:
      "What is the average the airspeed velocity of a (European) unladen swallow?",
    answer: "11 meters per second"
  },
  {
    id: 2,
    question: "What is the answer to life the universe and everything?",
    answer: "42"
  }
];

export default function App() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(-45deg, #E600C9,rgb(26, 108, 140), #002A3A)",
          backgroundSize: "400% 400%",
          animation: "moveAurora 15s ease infinite",
          zIndex: -1,
          "@keyframes moveAurora": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div className="forsta-logo" style={{ width: 300, height: 100 }} data-testid="forsta-logo"/>
        <QuestionList questions={questions} />
      </Container>
    </>
  );
}
