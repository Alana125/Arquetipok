import Button from '../components/Button';
import Mascot from '../components/Mascot';

function Result({ quiz, result, score, onRefazer, onCompartilhar, onBack }) {
  if (!quiz || !result) return null;

  // Calculate total score and percentage
  const totalScore = Object.values(score).reduce((sum, val) => sum + val, 0);
  const maxScore = quiz.questions.length;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const handleCompartilhar = () => {
    const text = `Acabei de fazer o quiz "${quiz.title}" e meu resultado foi: ${result.title}! Descubra o seu também no Arquetipo!`;
    if (navigator.share) {
      navigator.share({
        title: 'Meu resultado no Arquetipo',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert('Resultado copiado para a área de transferência!');
      });
    }
    onCompartilhar();
  };

  return (
    <div className="result">
      <button className="back-button" onClick={onBack}>← Voltar</button>

      <div className="result-header">
        <Mascot size="large" mood="excited" />
        <h2>Seu Resultado!</h2>
        <p className="quiz-title">{quiz.title}</p>
      </div>

      <div className="result-card">
        <div className="result-icon">{quiz.icon}</div>
        <h3 className="result-title">{result.title}</h3>
        <p className="result-description">{result.description}</p>
        <div className="result-score">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-details">Acurácia: {totalScore} de {maxScore}</div>
        </div>
      </div>

      <div className="result-actions">
        <Button onClick={onRefazer} variant="secondary">
          🔄 Refazer Quiz
        </Button>
        <Button onClick={handleCompartilhar} variant="primary">
          📤 Compartilhar
        </Button>
      </div>
    </div>
  );
}

export default Result;