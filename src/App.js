import { useState, useEffect } from "react";
// import Axios from "axios";

// import Excuser from "./components/Excuser";

function App() {
  const categories = ["party", "family", "office"];
  // The Excuse App section
  const [category, setCategory] = useState("");

  const [excuse, setExcuse] = useState([]);

  const selectCategory = (name) => {
    setCategory(name)
    console.log(category);
  };

  useEffect(() => {
    const fetchExcuse = async () => {
      try {
        const res = await fetch(
          `https://excuser-three.vercel.app/v1/excuse/${category}`
        );
        const data = await res.json();

        setExcuse(data[0]);
      } catch {
        console.error("error fetching data");
      }
    };

    if (category) {
      fetchExcuse();
      setCategory("");
    }
  }, [category]);

  

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
