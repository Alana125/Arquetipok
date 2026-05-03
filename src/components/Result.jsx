function Result({ result, onBack }) {
  return (
    <div className="result">
      <h2>Seu Resultado</h2>
      <h3>{result.title}</h3>
      <p>{result.description}</p>
      <button onClick={onBack} className="back-button">Voltar ao Início</button>
    </div>
  );
}

export default Result;