import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Question } from "../components/3_Question";
import "@testing-library/jest-dom";

describe("Question Component", () => {
  it("renders the question", () => {
    render(<Question question="What is React?" answer="A JavaScript library" />);
    
    expect(screen.getByText(/What is React?/i)).toBeInTheDocument();
  });

  it("shows confirmation when 'Show Answer' is clicked", async () => {
    render(<Question question="What is React?" answer="A JavaScript library" />);
    
    await userEvent.click(screen.getByText(/Show Answer/i));

    expect(screen.getByText(/Are you sure you want to reveal the answer?/i)).toBeInTheDocument();
  });

  it("reveals the answer when 'Accept' is clicked", async () => {
    render(<Question question="What is React?" answer="A JavaScript library" />);
    
    await userEvent.click(screen.getByText(/Show Answer/i));
    await userEvent.click(screen.getByText(/Accept/i));

    expect(screen.getByText(/A JavaScript library/i)).toBeInTheDocument();
  });

  it("hides confirmation when 'Decline' is clicked", async () => {
    render(<Question question="What is React?" answer="A JavaScript library" />);
    
    await userEvent.click(screen.getByText(/Show Answer/i));
    await userEvent.click(screen.getByText(/Decline/i));

    expect(screen.queryByText(/Are you sure you want to reveal the answer?/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/A JavaScript library/i)).not.toBeInTheDocument();
  });
});
