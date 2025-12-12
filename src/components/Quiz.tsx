import { useState } from 'react';
import { questions } from '../data/questions';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import ScorePage from './ScorePage';
import CatPaw from './CatPaw';

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
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)',
        backdropFilter: 'blur(200px)',
      }}
    >
      <div
        className="bg-white shadow-2xl relative flex flex-col overflow-hidden w-full max-w-5xl lg:max-w-6xl"
        style={{
          borderRadius: '42px',
          opacity: 1,
          aspectRatio: '1542 / 856',
        }}
      >
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col h-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mb-2 sm:mb-3">
              <span className="text-gray-800">Test Your </span>
              <span className="text-teal-600">Knowledge</span>
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm">Answer all questions to see your results</p>
          </div>

          <ProgressBar
            totalBars={questions.length}
            currentQuestion={currentQuestionIndex}
            completedQuestions={completedQuestions}
          />

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

          {currentQuestionIndex === 0 && (
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-0 left-4 sm:left-6 md:left-8">
              <CatPaw />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
