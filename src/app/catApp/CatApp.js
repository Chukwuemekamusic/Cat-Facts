import { useState, useEffect, createContext } from "react";
import GenerateCatFacts from "./components/GenerateCatFacts";

// use of context Api
export const AppContext = createContext();

function CatApp() {
  const [catFacts, setCatFacts] = useState([]);

  const generateCatFact = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      // console.log(data)

      // Send POST request to your JSON server endpoint
      const response = await fetch("http://localhost:5000/cat-facts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const savedData = await response.json();

      setCatFacts([...catFacts, savedData]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getFacts = async () => {
      try {
        const dataFromServer = await fetchFactsFromServer();
        setCatFacts(dataFromServer);
      } catch (error) {
        console.error("Error retrieving data: ", error.message)
      }      
    };

    getFacts();
  }, []);

  const fetchFactsFromServer = async () => {
    try {
      const res = await fetch(`http://localhost:5000/cat-facts`);
      if (!res.ok) {
        throw new Error('Failed to fetch data from server');
      }
      const data = res.json();
      return data;
    } catch {
      console.error("Data not fetched from server");
      return [];
    }
  };

  const deleteCatFact = async (id) => {
    // delete from DATABASE
    await fetch(`http://localhost:5000/cat-facts/${id}`, {
      method: "DELETE",
    });

    // delete from UI
    setCatFacts(catFacts.filter((cat) => cat.id !== id));
  };

  return (
    <div className="container">
      <AppContext.Provider value={{catFacts, generate: generateCatFact, onDelete: deleteCatFact }} >
      <GenerateCatFacts
        // generate={generateCatFact}
        // catFacts={catFacts}
        // onDelete={deleteCatFact}
      />
      </AppContext.Provider>
    </div>
  );
}

export default CatApp;
