import { Meta, StoryObj } from "@storybook/react";
import { Question } from "./3_Question";
import { userEvent, screen, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Components/Question",
  component: Question,
} as Meta;

export const Default: StoryObj<typeof Question> = {
  args: {
    question: "What is React?",
    answer: "A JavaScript library",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on "Show Answer" button
    const showAnswerButton = await canvas.getByRole("button", { name: /show answer/i });
    await userEvent.click(showAnswerButton);

    // Expect confirmation message to appear
    expect(await canvas.findByText(/Are you sure you want to reveal the answer?/i)).toBeInTheDocument();

    // Click on "Accept"
    const acceptButton = await canvas.getByRole("button", { name: /accept/i });
    await userEvent.click(acceptButton);

    // Expect answer to be visible
    expect(await canvas.findByText(/A JavaScript library/i)).toBeInTheDocument();
  },
};

