import { Question } from "../types/quiz";
import { MoveLeft, MoveRight } from "lucide-react";

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
    <div className="w-full space-y-5">
      <div
        className="rounded-2xl px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#c5e7f7]"
        style={{
          background:
            "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
        }}
      >
        <p className="font-semibold text-center text-lg leading-6 text-[#1f3846]">
          {questionNumber}. {question.question}
        </p>
      </div>

      <div className="space-y-3">
        {question.answers.map((answer) => {
          const selected = selectedAnswer === answer.id;
          return (
            <button
              key={answer.id}
              onClick={() => onSelectAnswer(answer.id)}
              className={`w-full px-6 py-4 rounded-2xl border transition-all duration-200 text-base font-semibold ${
                selected
                  ? "bg-gradient-to-r from-[#d8f2ff] to-[#cdeefe] border-[#c5e7f7] shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
                  : "bg-[#eef7fb] border-[#e0ebf4] hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)]"
              }`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end items-center gap-4 pt-5">
        <button
          onClick={showBack ? onBack : undefined}
          disabled={!showBack}
          className={`w-[50px] h-[50px] rounded-[12px] border transition-all duration-200 flex items-center justify-center flex-shrink-0 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ${
            showBack
              ? "border-[#d9e8f3]"
              : "bg-gradient-to-br from-[#eef3f7] to-[#e1e8ef] border-[#d6e1eb] opacity-70 cursor-not-allowed"
          }`}
          style={
            showBack
              ? {
                  background:
                    "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
                }
              : undefined
          }
          aria-label="Previous question"
        >
          <MoveLeft
            className={`w-5 h-5 ${
              showBack ? "text-[#5c6f7b]" : "text-[#a4b2bc]"
            }`}
          />
        </button>
        {isLastQuestion ? (
          <button
            onClick={onNext}
            disabled={!selectedAnswer}
            className="h-[50px] w-[141px] rounded-[12px] border border-[#c8e7f7] shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
            }}
            aria-label="Submit quiz"
          >
            <span className="text-[#1f3846] font-semibold text-base leading-none">
              Submit
            </span>
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={!selectedAnswer}
            className={`h-[50px] w-[50px] rounded-[12px] flex items-center justify-center flex-shrink-0 border transition-all duration-200 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ${
              selectedAnswer
                ? "border-[#c8e7f7] hover:brightness-[1.03]"
                : "bg-gradient-to-br from-[#e9f2f8] to-[#d9e6f0] border-[#d6e1eb] cursor-not-allowed opacity-60"
            }`}
            style={
              selectedAnswer
                ? {
                    background:
                      "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
                  }
                : undefined
            }
            aria-label="Next question"
          >
            <MoveRight className="w-5 h-5 text-[#1f3846]" />
          </button>
        )}
      </div>
    </div>
  );
}
