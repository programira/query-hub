
import { Question } from "./3_Question";
import { QuestionListProps } from "../types/question";

export function QuestionList({ questions }: QuestionListProps) {
  return (
    <div className="question-list">
      {
        questions.map((question) => (
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))
      }
    </div>
  );
}
