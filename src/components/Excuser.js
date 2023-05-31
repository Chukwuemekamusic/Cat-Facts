const Excuser = ({ categories, selectCategory, excuse}) => {
  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
      <br />
      <p>{excuse.excuse}</p>
      <p>{excuse.category}</p>
    </div>
  );
};

export default Excuser;
