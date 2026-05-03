import Avatar from '../components/Avatar';

function Profile({ user }) {
  return (
    <div className="profile">
      <div className="profile-header">
        <Avatar src={user.avatar} alt={user.name} size="large" />
        <h2>{user.name}</h2>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-value">{user.score}</span>
          <span className="stat-label">Pontuação</span>
        </div>
        <div className="stat">
          <span className="stat-value">{user.quizzesPlayed}</span>
          <span className="stat-label">Quizzes Jogados</span>
        </div>
      </div>

      <div className="badges">
        <h3>Conquistas</h3>
        <div className="badges-grid">
          {user.badges.map((badge, index) => (
            <div key={index} className="badge">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;