export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}
