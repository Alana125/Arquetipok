import { useState } from 'react';

function Quiz({ quiz, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});

  const handleAnswer = (option) => {
    const newScores = { ...scores };
    option.points.forEach(point => {
      newScores[point.category] = (newScores[point.category] || 0) + point.value;
    });
    setScores(newScores);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular resultado
      const maxCategory = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
      const result = quiz.results.find(r => r.category === maxCategory);
      onComplete(result);
    }
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className="quiz">
      <h2>{quiz.title}</h2>
      <div className="question">
        <p>{question.text}</p>
        <div className="options">
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className="option-button">
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <div className="progress">
        Pergunta {currentQuestion + 1} de {quiz.questions.length}
      </div>
    </div>
  );
}

export default Quiz;