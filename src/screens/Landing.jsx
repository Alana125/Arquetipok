import { useState } from 'react';
import Mascot from '../components/Mascot';
import './Landing.css';

function Landing({ onStart }) {
  const [showWelcome, setShowWelcome] = useState(false);

  const handleStart = () => {
    setShowWelcome(true);
    setTimeout(() => {
      onStart();
    }, 2000);
  };

  return (
    <div className="landing">
      <div className="landing-background">
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
        <div className="gradient-overlay-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1">✨</div>
          <div className="shape shape-2">🌟</div>
          <div className="shape shape-3">💫</div>
          <div className="shape shape-4">⭐</div>
        </div>
      </div>

      <div className="landing-content">
        <div className="hero-section">
          <div className="mascot-container">
            <Mascot size="large" mood="excited" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Bem-vinda, <span className="highlight">Lyana</span>!
            </h1>
            <p className="hero-subtitle">
              Descubra seu verdadeiro eu através de quizzes incríveis
            </p>
            <p className="hero-description">
              Explore sua personalidade, carreira, relacionamentos e muito mais
              em uma jornada de autoconhecimento única e divertida.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Quizzes</span>
            </div>
            <div className="stat">
              <span className="stat-number">80+</span>
              <span className="stat-label">Perguntas</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Descobertas</span>
            </div>
          </div>

          <button className="start-button" onClick={handleStart}>
            <span className="button-text">Começar Jornada</span>
            <span className="button-icon">🚀</span>
          </button>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Autoconhecimento</h3>
            <p>Descubra aspectos da sua personalidade que você nem imaginava</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Resultados Detalhados</h3>
            <p>Análises profundas e personalizadas para cada quiz</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Experiência Única</h3>
            <p>Interface moderna e intuitiva com toques de magia</p>
          </div>
        </div>

        {showWelcome && (
          <div className="welcome-overlay">
            <div className="welcome-message">
              <Mascot size="medium" mood="happy" />
              <h2>Prepare-se para uma jornada incrível!</h2>
              <p>Estamos configurando tudo para você...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;