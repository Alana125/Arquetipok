import { useState } from 'react';
import LeaderboardItem from '../components/LeaderboardItem';

// Mock data
const mockUsers = [
  { id: 1, name: 'Maria Santos', avatar: 'https://via.placeholder.com/50', score: 2450 },
  { id: 2, name: 'Pedro Lima', avatar: 'https://via.placeholder.com/50', score: 2200 },
  { id: 3, name: 'Ana Costa', avatar: 'https://via.placeholder.com/50', score: 2100 },
  { id: 4, name: 'João Silva', avatar: 'https://via.placeholder.com/50', score: 1250 },
  { id: 5, name: 'Carla Oliveira', avatar: 'https://via.placeholder.com/50', score: 1100 },
];

function Leaderboard() {
  const [activeTab, setActiveTab] = useState('semanal');

  const weeklyUsers = mockUsers.slice(0, 3); // Mock weekly data
  const allTimeUsers = mockUsers;

  const currentUsers = activeTab === 'semanal' ? weeklyUsers : allTimeUsers;

  return (
    <div className="leaderboard">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'semanal' ? 'active' : ''}`}
          onClick={() => setActiveTab('semanal')}
        >
          Semanal
        </button>
        <button
          className={`tab ${activeTab === 'geral' ? 'active' : ''}`}
          onClick={() => setActiveTab('geral')}
        >
          Geral
        </button>
      </div>

      <div className="leaderboard-list">
        {currentUsers.map((user, index) => (
          <LeaderboardItem key={user.id} user={user} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;