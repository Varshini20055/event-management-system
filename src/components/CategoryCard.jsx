function CategoryCard({ category, onViewEvents }) {
  return (
    <article className={`category-card cat-${category.id.toLowerCase()}`}>
      <div className="category-icon" aria-hidden="true">
        {category.icon}
      </div>
      <h3>{category.id}</h3>
      <p>{category.description}</p>
      <ul className="tag-list">
        {category.examples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-dark" onClick={() => onViewEvents(category.id)}>
        View Events
      </button>
    </article>
  );
}

export default CategoryCard;
