import { useState, useEffect, useRef } from 'react';
import Avatar from '../components/Avatar';
import Button from '../components/Button';

function Profile({ user, onUserUpdate, onBack }) {
  const [profile, setProfile] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState({ name: '', score: '', quizzesPlayed: '', badges: '' });
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    setProfile(user);
    setFormState({
      name: user.name || '',
      score: user.score || '',
      quizzesPlayed: user.quizzesPlayed || '',
      badges: (user.badges || []).join(', ')
    });
  }, [user]);

  if (!profile) return null;

  const displayName = profile.name || 'Usuário';
  const avatar = profile.avatar || 'https://via.placeholder.com/150';
  const score = profile.score || 0;
  const quizzesPlayed = profile.quizzesPlayed || 0;
  const badges = profile.badges || [];

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione um arquivo de imagem.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const avatarUrl = reader.result;
      const updatedProfile = { ...profile, avatar: avatarUrl };
      setProfile(updatedProfile);
      window.localStorage.setItem('arquetipoUser', JSON.stringify(updatedProfile));
      onUserUpdate(updatedProfile);
    };
    reader.readAsDataURL(file);
  };

  const handleEditToggle = () => {
    setError('');
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formState.name.trim()) {
      setError('O nome não pode ficar vazio.');
      return;
    }

    const updatedProfile = {
      ...profile,
      name: formState.name.trim(),
      score: Number(formState.score) || 0,
      quizzesPlayed: Number(formState.quizzesPlayed) || 0,
      badges: formState.badges.split(',').map((badge) => badge.trim()).filter(Boolean)
    };

    setProfile(updatedProfile);
    window.localStorage.setItem('arquetipoUser', JSON.stringify(updatedProfile));
    onUserUpdate(updatedProfile);
    setIsEditing(false);
    setError('');
  };

  return (
    <div className="profile">
      <button className="back-button" onClick={onBack || (() => {})}>← Voltar</button>
      <div className="profile-header">
        <div className="avatar-upload-container">
          <button className="avatar-upload-button" type="button" onClick={handleAvatarClick}>
            <Avatar src={avatar} alt={displayName} size="large" />
            <span className="upload-overlay">📷</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        <div className="profile-info">
          <h2>{displayName}</h2>
          <p>Edite seu perfil e personalize suas informações.</p>
          <Button onClick={handleEditToggle} variant="secondary">
            {isEditing ? 'Cancelar' : 'Editar perfil'}
          </Button>
        </div>
      </div>

      {error && <p className="profile-error">{error}</p>}

      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-label">Pontuação</span>
          <strong>{score}</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">Quizzes jogados</span>
          <strong>{quizzesPlayed}</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">Conquistas</span>
          <strong>{badges.length}</strong>
        </div>
      </div>

      <div className="badges-section">
        <h3>Suas badges</h3>
        <div className="badges-grid">
          {badges.length > 0 ? (
            badges.map((badge, index) => (
              <span key={index} className="badge-item">
                {badge}
              </span>
            ))
          ) : (
            <span className="badge-empty">Nenhuma badge ainda</span>
          )}
        </div>
      </div>

      {isEditing && (
        <div className="profile-edit-form">
          <h3>Editar informações</h3>
          <div className="form-row">
            <label>Nome</label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Pontuação</label>
            <input
              type="number"
              value={formState.score}
              onChange={(e) => handleInputChange('score', e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Quizzes jogados</label>
            <input
              type="number"
              value={formState.quizzesPlayed}
              onChange={(e) => handleInputChange('quizzesPlayed', e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Badges (separadas por vírgula)</label>
            <input
              type="text"
              value={formState.badges}
              onChange={(e) => handleInputChange('badges', e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Salvar alterações</Button>
        </div>
      )}
    </div>
  );
}

export default Profile;
