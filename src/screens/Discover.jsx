import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import QuizCard from '../components/QuizCard';
import Mascot from '../components/Mascot';
import quizzes from '../data/quizzes.json';

function Discover({ onQuizSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuizzes = quizzes.filter(quiz => {
    return [quiz.title, quiz.description, quiz.category]
      .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="discover">
      <div className="discover-header">
        <Mascot size="medium" mood="happy" />
        <div className="discover-welcome">
          <h2>Descubra seu Arquetipo!</h2>
          <p>Explore quizzes incríveis e conheça mais sobre você</p>
        </div>
      </div>

      <div className="discover-actions">
        <SearchInput
          placeholder="Buscar quizzes, categorias ou temas..."
          onChange={setSearchTerm}
        />
      </div>

      <div className="quizzes-list">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map(quiz => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onClick={onQuizSelect}
            />
          ))
        ) : (
          <p className="empty-state">Nenhum quiz encontrado. Ajuste a busca para ver mais resultados.</p>
        )}
      </div>
    </div>
  );
}

export default Discover;