function QuizCard({ quiz, onClick }) {
  return (
    <div className="quiz-card" onClick={() => onClick(quiz)}>
      <div className="quiz-image">
        <span className="quiz-icon">{quiz.icon}</span>
      </div>
      <div className="quiz-info">
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <span className="quiz-questions">{quiz.questions.length} perguntas</span>
      </div>
    </div>
  );
}

export default QuizCard;