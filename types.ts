
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
  COMPLETE_ANSWER = 'COMPLETE_ANSWER',
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  tip?: string;
}

export enum GameMode {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  REVIEW = 'REVIEW',
}