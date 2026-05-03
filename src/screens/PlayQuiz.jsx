import { useState } from 'react';
import Button from '../components/Button';

function PlayQuiz({ quiz, onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!quiz) return null;

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    // Auto-advance after a short delay for better UX
    setTimeout(() => {
      handleNext();
    }, 800);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newScores = { ...scores };
    selectedAnswer.points.forEach(point => {
      newScores[point.category] = (newScores[point.category] || 0) + point.value;
    });
    setScores(newScores);
    setSelectedAnswer(null);
    setShowFeedback(false);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Passar os scores completos para o callback
      onComplete(newScores);
    }
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="play-quiz">
      <button className="back-button" onClick={onBack}>← Voltar</button>

      <div className="quiz-progress">
        <div className="progress-info">
          <span className="question-number">Pergunta {currentQuestion + 1} de {quiz.questions.length}</span>
          <span className="progress-percentage">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="question">
        <h3>{question.text}</h3>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === option ? 'selected' : ''} ${showFeedback && selectedAnswer === option ? 'feedback' : ''}`}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
            >
              {option.text}
              {showFeedback && selectedAnswer === option && (
                <span className="feedback-icon">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div className="feedback-message">
          <p>Resposta registrada! Preparando próxima pergunta...</p>
        </div>
      )}

      <Button onClick={handleNext} disabled={!selectedAnswer || showFeedback}>
        {currentQuestion < quiz.questions.length - 1 ? 'Próximo' : 'Finalizar'}
      </Button>
    </div>
  );
}

export default PlayQuiz;