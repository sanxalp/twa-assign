import { useEffect, useState } from 'react';

interface ScorePageProps {
  score: number;
  totalQuestions: number;
  onStartAgain: () => void;
}

export default function ScorePage({ score, totalQuestions, onStartAgain }: ScorePageProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    const duration = 600;
    const steps = 50;
    const increment = percentage / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayScore(percentage);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
      <div className="text-center space-y-8 sm:space-y-12 w-full max-w-2xl">
        <p className="text-gray-600 text-base sm:text-lg font-medium">Keep Learning!</p>

        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-teal-700">
            Your Final score is
          </h1>
          <div className="flex items-baseline justify-center gap-1 sm:gap-2">
            <div className="text-6xl sm:text-8xl md:text-[160px] leading-none font-serif font-bold text-teal-700">
              {displayScore}
            </div>
            <span className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-teal-700 mb-0 sm:mb-8">%</span>
          </div>
        </div>

        <button
          onClick={onStartAgain}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-cyan-100 hover:bg-cyan-200 text-gray-800 font-medium text-sm sm:text-base rounded-xl sm:rounded-2xl transition-colors duration-200"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
