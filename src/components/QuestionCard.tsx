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
    <div className="w-full space-y-4 sm:space-y-5 md:space-y-6">
      <div className="bg-cyan-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
        <p className="text-gray-800 font-medium text-center text-sm sm:text-base">
          {questionNumber}. {question.question}
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => onSelectAnswer(answer.id)}
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-gray-800 font-medium text-sm sm:text-base transition-all duration-200 ${
              selectedAnswer === answer.id
                ? 'bg-cyan-100 shadow-md'
                : 'bg-gray-50 hover:bg-gray-100 hover:shadow-sm'
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-2 sm:gap-3 pt-3 sm:pt-4">
        {showBack && (
          <button
            onClick={onBack}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
            aria-label="Previous question"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`rounded-full transition-all duration-200 flex items-center justify-center flex-shrink-0 ${
            selectedAnswer
              ? 'bg-cyan-100 hover:bg-cyan-200'
              : 'bg-gray-200 cursor-not-allowed opacity-50'
          } ${isLastQuestion ? 'px-4 sm:px-6 h-10 sm:h-12' : 'w-10 h-10 sm:w-12 sm:h-12'}`}
          aria-label={isLastQuestion ? 'Submit quiz' : 'Next question'}
        >
          {isLastQuestion ? (
            <span className="text-gray-800 font-medium text-sm sm:text-base">Submit</span>
          ) : (
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
}
