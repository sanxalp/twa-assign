interface ProgressBarProps {
  totalBars: number;
  currentQuestion: number;
  completedQuestions: number;
}

export default function ProgressBar({ totalBars, currentQuestion, completedQuestions }: ProgressBarProps) {
  const getBarProgress = (index: number) => {
    if (index < completedQuestions) {
      return 100;
    } else if (index === currentQuestion) {
      return 75;
    }
    return 0;
  };

  return (
    <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${getBarProgress(index)}%` }}
          />
        </div>
      ))}
    </div>
  );
}
