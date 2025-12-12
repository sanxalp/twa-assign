import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: 'What sound does a cat make?',
    answers: [
      { id: 'q1-a1', text: 'Bhau-Bhau', isCorrect: false },
      { id: 'q1-a2', text: 'Meow-Meow', isCorrect: true },
      { id: 'q1-a3', text: 'Oink-Oink', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'What would you probably find in your fridge?',
    answers: [
      { id: 'q2-a1', text: 'Shoes', isCorrect: false },
      { id: 'q2-a2', text: 'Ice Cream', isCorrect: true },
      { id: 'q2-a3', text: 'Books', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'What color are bananas?',
    answers: [
      { id: 'q3-a1', text: 'Blue', isCorrect: false },
      { id: 'q3-a2', text: 'Yellow', isCorrect: true },
      { id: 'q3-a3', text: 'Red', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'How many stars are in the sky?',
    answers: [
      { id: 'q4-a1', text: 'Two', isCorrect: false },
      { id: 'q4-a2', text: 'Infinite', isCorrect: true },
      { id: 'q4-a3', text: 'One Hundred', isCorrect: false },
    ],
  },
];
