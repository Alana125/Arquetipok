import { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Landing from './screens/Landing';
import Discover from './screens/Discover';
import QuizDetail from './screens/QuizDetail';
import PlayQuiz from './screens/PlayQuiz';
import Result from './screens/Result';
import Leaderboard from './screens/Leaderboard';
import Profile from './screens/Profile';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [user, setUser] = useState({
    name: 'Lyana',
    avatar: 'https://via.placeholder.com/50',
    score: 1250,
    quizzesPlayed: 15,
    badges: ['Iniciante', 'Curioso', 'Veloz']
  });

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentScreen('quizDetail');
  };

  const handlePlayQuiz = () => {
    setCurrentScreen('playQuiz');
  };

  const handleRefazerQuiz = () => {
    setCurrentScreen('playQuiz');
  };

  const handleQuizComplete = (result, score) => {
    console.log('Quiz completado:', result, score);
    setQuizResult({ result, score });
    setCurrentScreen('result');
  };

  const handleCompartilhar = () => {
    // Lógica de compartilhamento já está no componente Result
  };

  const handleStart = () => {
    setCurrentScreen('discover');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing onStart={handleStart} />;
      case 'discover':
        return <Discover onQuizSelect={handleQuizSelect} />;
      case 'quizDetail':
        return <QuizDetail quiz={selectedQuiz} onPlay={handlePlayQuiz} onBack={() => setCurrentScreen('discover')} />;
      case 'playQuiz':
        return <PlayQuiz quiz={selectedQuiz} onComplete={handleQuizComplete} onBack={() => setCurrentScreen('quizDetail')} />;
      case 'result':
        return (
          <Result
            quiz={selectedQuiz}
            result={quizResult?.result}
            score={quizResult?.score}
            onRefazer={handleRefazerQuiz}
            onCompartilhar={handleCompartilhar}
            onBack={() => setCurrentScreen('discover')}
          />
        );
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile user={user} />;
      default:
        return <Landing onStart={handleStart} />;
    }
  };

  return (
    <div className="app">
      {currentScreen !== 'landing' && (
        <Header
          user={user}
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
        />
      )}
      <main className={`main-content ${currentScreen === 'landing' ? 'full-screen' : ''}`}>
        {renderScreen()}
      </main>
      {currentScreen !== 'landing' && <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </div>
  );
}

export default App;