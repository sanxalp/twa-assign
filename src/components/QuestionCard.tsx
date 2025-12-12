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
    <div className="w-full space-y-6 sm:space-y-8">
      <div
        className="rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-center"
        style={{
          background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
          border: '1px solid #96E5FF',
        }}
      >
        <p className="text-gray-800 font-semibold text-lg sm:text-2xl">
          {questionNumber}. {question.question}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => onSelectAnswer(answer.id)}
            className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-gray-800 font-semibold text-lg sm:text-2xl transition-all duration-200 text-center"
            style={{
              background: selectedAnswer === answer.id
                ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                : 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)',
              border: selectedAnswer === answer.id
                ? '1px solid #96E5FF'
                : '1px solid rgba(150, 229, 255, 0.5)',
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-3 sm:gap-4 pt-4 sm:pt-6">
        {showBack && (
          <button
            onClick={onBack}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
            style={{
              background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
              border: '1px solid rgba(150, 229, 255, 0.05)',
              opacity: 0.3,
            }}
            aria-label="Previous question"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="flex items-center justify-center flex-shrink-0 rounded-xl transition-all duration-200 px-6 sm:px-8 py-3 sm:py-4"
          style={{
            background: selectedAnswer
              ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
              : '#E3E3E3',
            border: selectedAnswer ? '1px solid rgba(150, 229, 255, 0.05)' : '1px solid #E3E3E3',
            opacity: selectedAnswer ? 1 : 0.5,
            cursor: selectedAnswer ? 'pointer' : 'not-allowed',
          }}
          aria-label={isLastQuestion ? 'Submit quiz' : 'Next question'}
        >
          {isLastQuestion ? (
            <span className="text-gray-800 font-semibold text-lg">Submit</span>
          ) : (
            <ChevronRight className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
}
