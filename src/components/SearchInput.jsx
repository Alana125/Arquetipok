import { useState } from 'react';

function SearchInput({ placeholder = "Buscar quizzes...", onChange }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange(value);
  };

  const handleClear = () => {
    setSearchValue('');
    onChange('');
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        autoComplete="off"
      />
      <span className="search-icon">🔍</span>
      {searchValue && (
        <button className="search-clear" onClick={handleClear} title="Limpar busca">
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchInput;