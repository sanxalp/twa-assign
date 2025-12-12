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
      }}
    >
      <div
        className="relative flex flex-col overflow-hidden w-full max-w-5xl lg:max-w-6xl shadow-2xl"
        style={{
          borderRadius: '50px',
          background: 'linear-gradient(112.86deg, rgba(255, 255, 255, 0.4) -6.68%, rgba(255, 255, 255, 0.12) 45.63%, rgba(255, 255, 255, 0.4) 103.45%)',
          backdropFilter: 'blur(6.97px)',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          aspectRatio: '1625 / 920',
        }}
      >
        <div
          className="absolute inset-0 rounded-[42px] pointer-events-none"
          style={{
            background: '#F4FDFF',
            margin: '19px',
          }}
        />

        <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col h-full justify-between">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-serif italic"
              style={{
                background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-4px',
              }}
            >
              Test Your Knowledge
            </h1>
            <div className="flex justify-center">
              <div
                className="px-8 py-3 rounded-lg text-gray-800 font-medium text-lg"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                Answer all questions to see your results
              </div>
            </div>
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
            <div className="absolute bottom-8 left-8" style={{ transform: 'scaleX(-1)' }}>
              <CatPaw />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
