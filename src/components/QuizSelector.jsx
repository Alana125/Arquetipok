import quizzes from '../data/quizzes.json';

function QuizSelector({ onSelect }) {
  return (
    <div className="quiz-selector">
      <h1>Arquetipo</h1>
      <p>Escolha um quiz para descobrir mais sobre você!</p>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <button key={quiz.id} onClick={() => onSelect(quiz)} className="quiz-button">
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizSelector;