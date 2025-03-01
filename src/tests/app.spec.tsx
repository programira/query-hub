import React from 'react';
import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

describe("QuestionList App", () => {
  it("renders the app and finds Forsta logo", () => {
    // Commenting this out becuase updated the React and ReactDOM.render is no longer supported in React 18. The test passes but it is depricated
    // const app = render(<App />);
    // expect(app).not.toBeUndefined();
    render(<App />);

    const logoDiv = screen.getByTestId("forsta-logo");
    expect(logoDiv).toBeInTheDocument();
  });
});
