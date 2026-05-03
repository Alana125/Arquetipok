function SearchInput({ placeholder = "Buscar quizzes...", onChange }) {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchInput;