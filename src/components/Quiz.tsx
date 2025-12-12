import { useState } from "react";
import { questions } from "../data/questions";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ScorePage from "./ScorePage";
import CatPaw from "./CatPaw";
import BestOfLuck from "./BestOfLuck";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex] || null;

  const handleSelectAnswer = (answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCompletedQuestions(currentQuestionIndex + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompletedQuestions(questions.length);
      calculateAndShowResults();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCompletedQuestions(currentQuestionIndex - 1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateAndShowResults = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      const selectedAnswerId = answers[index];
      const correctAnswer = question.answers.find((a) => a.isCorrect);
      if (correctAnswer && selectedAnswerId === correctAnswer.id) {
        correct++;
      }
    });
    return correct;
  };

  const handleStartAgain = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCompletedQuestions(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <ScorePage
        score={calculateScore()}
        totalQuestions={questions.length}
        onStartAgain={handleStartAgain}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="relative w-full max-w-[1580px] bg-white/70 border border-white/60 rounded-[32px] shadow-[0_30px_70px_rgba(75,140,170,0.35)] backdrop-blur-[3px] overflow-visible">
        <div className="relative bg-[#f7fdff] rounded-[28px] m-6 p-12 flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] overflow-visible">
          <div className="text-center mb-10">
            <h1
              className="inline-block text-[52px] leading-[62px] font-[700] font-[Playfair Display] italic"
              style={{
                background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Test Your Knowledge
            </h1>
            <div className="mt-4">
              <p className="inline-block text-[#3e4951] text-sm font-medium px-5 py-2 bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#e7eef4]">
                Answer all questions to see your results
              </p>
            </div>
          </div>

          <ProgressBar
            totalBars={questions.length}
            currentQuestion={currentQuestionIndex}
            completedQuestions={completedQuestions}
          />

          <div className="mx-auto w-full max-w-4xl">
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
              onNext={handleNext}
              onBack={handleBack}
              showBack={currentQuestionIndex > 0}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          </div>

          {currentQuestionIndex === 0 && (
            <>
              <CatPaw />
              <BestOfLuck />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
