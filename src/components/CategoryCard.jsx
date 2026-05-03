function CategoryCard({ category, isActive, onClick }) {
  return (
    <button
      className={`category-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
}

export default CategoryCard;