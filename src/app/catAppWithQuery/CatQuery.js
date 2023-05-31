import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { createContext } from "react";
import FetchCatFacts from "./components/FetchCatFacts";

export const AppContext = createContext();

function CatQuery() {
  const {
    data: catData,
    isLoading,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="mt-3 container ">
      <AppContext.Provider value={{ refetch, catData }}>
        <FetchCatFacts />
      </AppContext.Provider>
    </div>
  );
}

export default CatQuery;
