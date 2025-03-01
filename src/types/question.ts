export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionProps {
  question: string;
  answer: string;
}

export interface QuestionListProps {
  questions: Question[];
}
