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
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)',
      }}
    >
      <div className="text-center space-y-12 sm:space-y-16 w-full max-w-2xl">
        <p className="text-gray-700 text-lg sm:text-xl font-medium">Keep Learning!</p>

        <div className="space-y-6 sm:space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic" style={{
            background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Your Final Score is
          </h1>
          <div className="flex items-baseline justify-center gap-2 sm:gap-4">
            <div className="text-7xl sm:text-8xl md:text-[140px] leading-none font-serif font-bold" style={{
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {displayScore}
            </div>
            <span className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold" style={{
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>%</span>
          </div>
        </div>

        <button
          onClick={onStartAgain}
          className="px-8 sm:px-12 py-3 sm:py-4 text-gray-800 font-semibold text-lg sm:text-xl rounded-xl transition-all duration-200"
          style={{
            background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
            border: '1px solid #96E5FF',
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
