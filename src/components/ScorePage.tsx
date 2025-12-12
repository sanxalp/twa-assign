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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" style={{ background: "#F4FDFF" }}>
      <div className="text-center space-y-8 sm:space-y-12 w-full max-w-2xl">
        <p className="inline-block px-5 py-2 bg-white rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.06)] border border-[#e7eef4] text-[#2d3c48] text-base sm:text-lg font-medium">
          Keep Learning!
        </p>

        <div className="space-y-4 sm:space-y-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-semibold bg-clip-text text-transparent inline-block"
            style={{
              background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Your Final score is
          </h1>
          <div className="flex items-baseline justify-center gap-1 sm:gap-2">
            <div
              className="text-6xl sm:text-8xl md:text-[160px] leading-none font-serif font-bold bg-clip-text text-transparent inline-block"
              style={{
                background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {displayScore}
            </div>
            <span
              className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold bg-clip-text text-transparent mb-0 sm:mb-8 inline-block"
              style={{
                background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              %
            </span>
          </div>
        </div>

        <button
          onClick={onStartAgain}
          className="px-6 sm:px-8 py-2 sm:py-3 text-gray-800 font-medium text-sm sm:text-base rounded-xl sm:rounded-2xl transition-colors duration-200 border border-[#c8e7f7]"
          style={{
            background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
