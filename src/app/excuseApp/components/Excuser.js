const Excuser = ({ categories, selectCategory, excuse}) => {
    return (
      <div>
        {categories.map((category) => (
          <button className="p-2 m-3" key={category} onClick={() => selectCategory(category)}>
            {category}
          </button>
        ))}
        <br />
        <p className="mt-3">{excuse.excuse}</p>
        <p>{excuse.category}</p>
      </div>
    );
  };
  
  export default Excuser;