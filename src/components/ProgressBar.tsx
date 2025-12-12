interface ProgressBarProps {
  totalBars: number;
  currentQuestion: number;
  completedQuestions: number;
}

export default function ProgressBar({ totalBars, currentQuestion, completedQuestions }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-3 my-8 sm:my-10">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center font-semibold text-lg sm:text-xl transition-all duration-300"
            style={{
              background: index <= completedQuestions
                ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                : index === currentQuestion
                ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                : '#E3E3E3',
              border: index < completedQuestions
                ? '2px solid #15313D'
                : index === currentQuestion
                ? '2px solid #15313D'
                : '2px solid #E6E6E6',
              color: index <= completedQuestions ? '#15313D' : '#999999',
            }}
          >
            {index + 1}
          </div>
          {index < totalBars - 1 && (
            <div
              className="h-1 transition-all duration-300"
              style={{
                width: '50px',
                background: index < completedQuestions ? '#15313D' : '#E6E6E6',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
