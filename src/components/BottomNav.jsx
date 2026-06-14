function BottomNav({ currentScreen, onNavigate }) {
  const navItems = [
    { id: 'leaderboard', label: 'Ranking', icon: '🏆' },
    { id: 'profile', label: 'Perfil', icon: '👤' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item ${currentScreen === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;