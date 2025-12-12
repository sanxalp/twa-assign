import { Question } from '../types/quiz';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  onNext: () => void;
  onBack: () => void;
  showBack: boolean;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onBack,
  showBack,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="bg-cyan-100 rounded-2xl px-6 py-4">
        <p className="text-gray-800 font-medium text-center">
          {questionNumber}. {question.question}
        </p>
      </div>

      <div className="space-y-4">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => onSelectAnswer(answer.id)}
            className={`w-full px-6 py-4 rounded-2xl text-gray-800 font-medium transition-all duration-200 ${
              selectedAnswer === answer.id
                ? 'bg-cyan-100 shadow-md'
                : 'bg-gray-50 hover:bg-gray-100 hover:shadow-sm'
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        {showBack && (
          <button
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors duration-200 flex items-center justify-center"
            aria-label="Previous question"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center ${
            selectedAnswer
              ? 'bg-cyan-100 hover:bg-cyan-200'
              : 'bg-gray-200 cursor-not-allowed opacity-50'
          } ${isLastQuestion ? 'px-6 w-auto' : ''}`}
          aria-label={isLastQuestion ? 'Submit quiz' : 'Next question'}
        >
          {isLastQuestion ? (
            <span className="text-gray-800 font-medium px-2">Submit</span>
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
}
