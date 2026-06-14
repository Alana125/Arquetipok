import { useState } from 'react';
import Mascot from '../components/Mascot';
import './Login.css';

const defaultUserProfile = {
  name: 'Lyana',
  avatar: 'https://via.placeholder.com/150',
  score: 1250,
  quizzesPlayed: 15,
  badges: ['Iniciante', 'Curioso', 'Veloz']
};

function Login({ onLoginSuccess, onBack }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getStoredAuth = () => {
    try {
      return JSON.parse(window.localStorage.getItem('arquetipoAuth')) || null;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const storedAuth = getStoredAuth();

    if (isSignup) {
      if (password !== confirmPassword) {
        setError('As senhas não conferem');
        setLoading(false);
        return;
      }
      if (!displayName.trim()) {
        setError('Por favor, insira seu nome');
        setLoading(false);
        return;
      }

      const newUser = {
        ...defaultUserProfile,
        name: displayName.trim()
      };

      window.localStorage.setItem('arquetipoAuth', JSON.stringify({ email, password }));
      window.localStorage.setItem('arquetipoUser', JSON.stringify(newUser));
      window.localStorage.setItem('arquetipoLoggedIn', 'true');
      onLoginSuccess(newUser);
      setLoading(false);
      return;
    }

    if (!storedAuth || storedAuth.email !== email || storedAuth.password !== password) {
      setError('E-mail ou senha inválidos');
      setLoading(false);
      return;
    }

    const storedUser = JSON.parse(window.localStorage.getItem('arquetipoUser')) || defaultUserProfile;
    window.localStorage.setItem('arquetipoLoggedIn', 'true');
    onLoginSuccess(storedUser);
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
        <div className="gradient-overlay-3"></div>
      </div>

      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <Mascot size="medium" mood="happy" />
            <h1>Arquetipo</h1>
            <p>Já pensou em descobrir mais sobre você?</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {isSignup && (
              <div className="form-group">
                <label htmlFor="displayName">Nome</label>
                <input
                  id="displayName"
                  type="text"
                  placeholder="Seu nome"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {isSignup && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Carregando...' : isSignup ? 'Criar Conta' : 'Entrar'}
            </button>
          </form>

          <div className="toggle-auth">
            <p>
              {isSignup ? 'Já tem uma conta?' : 'Ainda não tem conta?'}{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setError('');
                }}
              >
                {isSignup ? 'Entrar' : 'Criar Conta'}
              </button>
            </p>
            <button type="button" className="back-link" onClick={onBack}>
              Voltar para a primeira página
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
