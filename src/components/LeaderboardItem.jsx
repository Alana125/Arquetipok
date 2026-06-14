import Avatar from './Avatar';

function LeaderboardItem({ user, rank }) {
  const avatarSrc = user?.avatar || null; // Avatar component will fallback
  return (
    <div className="leaderboard-item">
      <span className="rank">#{rank}</span>
      <Avatar src={avatarSrc} alt={user.name} size="small" />
      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <span className="user-score">{user.score} pts</span>
      </div>
    </div>
  );
}

export default LeaderboardItem;