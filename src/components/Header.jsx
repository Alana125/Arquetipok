import Avatar from './Avatar';
import Mascot from './Mascot';

function Header({ user, currentScreen, onNavigate }) {
  const displayName = user.name === 'Usuário' ? 'Lyana' : user.name;
  const navItems = [
    { id: 'discover', label: 'Descobrir' },
    { id: 'leaderboard', label: 'Ranking' },
    { id: 'profile', label: 'Perfil' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Mascot size="small" mood="happy" />
          <div className="header-text">
            <h1 className="header-title">Arquetipo</h1>
            <p className="header-greeting">Olá, {displayName}! Vamos descobrir mais sobre você hoje?</p>
          </div>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-button ${currentScreen === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Avatar src={user.avatar} alt={displayName} size="small" />
        </div>
      </div>
    </header>
  );
}

export default Header;