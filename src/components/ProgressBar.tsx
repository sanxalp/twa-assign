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
      return 60;
    }
    return 0;
  };

  return (
    <div className="flex gap-5 justify-center mb-10">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div
          key={index}
          className="relative w-[180px] h-[2px] bg-[#e5e8eb] rounded-full overflow-visible"
        >
          <div
            className="absolute left-0 bg-[#123642] rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${getBarProgress(index)}%`,
              height: "6px",
              top: "-2px",
            }}
          />
        </div>
      ))}
    </div>
  );
}
