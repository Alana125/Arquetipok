import { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Discover from './screens/Discover';
import QuizDetail from './screens/QuizDetail';
import PlayQuiz from './screens/PlayQuiz';
import Result from './screens/Result';
import Leaderboard from './screens/Leaderboard';
import Profile from './screens/Profile';

const defaultUser = {
  name: 'Lyana',
  avatar: 'https://via.placeholder.com/150',
  score: 1250,
  quizzesPlayed: 15,
  badges: ['Iniciante', 'Curioso', 'Veloz']
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [user, setUser] = useState(() => {
    const saved = window.localStorage.getItem('arquetipoUser');
    return saved ? JSON.parse(saved) : defaultUser;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => window.localStorage.getItem('arquetipoLoggedIn') === 'true');

  useEffect(() => {
    window.localStorage.setItem('arquetipoUser', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    window.localStorage.setItem('arquetipoLoggedIn', isLoggedIn ? 'true' : 'false');
  }, [isLoggedIn]);

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

  const computeResult = (scores) => {
    if (!selectedQuiz?.results) return null;
    const bestCategory = Object.entries(scores || {}).reduce((best, [category, value]) => {
      if (!best || value > best.value) {
        return { category, value };
      }
      return best;
    }, null);

    return selectedQuiz.results.find((result) => result.category === bestCategory?.category) || selectedQuiz.results[0];
  };

  const handleQuizComplete = (scores) => {
    const result = computeResult(scores);
    setQuizResult({ result, score: scores });
    setCurrentScreen('result');
  };

  const handleCompartilhar = () => {
    // Lógica de compartilhamento
  };

  const handleStart = () => {
    if (isLoggedIn) {
      setCurrentScreen('discover');
    } else {
      setCurrentScreen('login');
    }
  };

  const handleLoginSuccess = (loggedUser) => {
    setUser(loggedUser);
    setIsLoggedIn(true);
    setCurrentScreen('discover');
  };

  const handleBackToLanding = () => {
    setCurrentScreen('landing');
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  const renderScreen = () => {
    if (!isLoggedIn && currentScreen !== 'landing' && currentScreen !== 'login') {
      return <Login onLoginSuccess={handleLoginSuccess} onBack={handleBackToLanding} />;
    }
    switch (currentScreen) {
      case 'landing':
        return <Landing onStart={handleStart} />;
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} onBack={handleBackToLanding} />;
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
        return <Leaderboard onBack={() => setCurrentScreen('discover')} />;
      case 'profile':
        return <Profile user={user} onUserUpdate={handleUserUpdate} onBack={() => setCurrentScreen('discover')} />;
      default:
        return <Landing onStart={handleStart} />;
    }
  };

  const showShell = currentScreen !== 'landing' && currentScreen !== 'login';

  return (
    <div className="app">
      {showShell && (
        <Header
          user={user}
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
        />
      )}
      <main className={`main-content ${currentScreen === 'landing' ? 'full-screen' : ''}`}>
        {renderScreen()}
      </main>
      {showShell && <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </div>
  );
}

export default App;