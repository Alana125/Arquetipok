import Button from '../components/Button';

function QuizDetail({ quiz, onPlay, onBack }) {
  if (!quiz) return null;

  return (
    <div className="quiz-detail">
      <button className="back-button" onClick={onBack}>← Voltar</button>

      <div className="quiz-header">
        <span className="quiz-icon-large">{quiz.icon}</span>
        <h2>{quiz.title}</h2>
        <p>{quiz.description}</p>
      </div>

      <div className="quiz-stats">
        <span>{quiz.questions.length} perguntas</span>
        <span>{quiz.category}</span>
      </div>

      <div className="quiz-actions">
        <Button onClick={onPlay}>Jogar Solo</Button>
        <Button variant="secondary">Jogar com Amigos</Button>
      </div>
    </div>
  );
}

export default QuizDetail;