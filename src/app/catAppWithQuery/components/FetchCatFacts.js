import { useContext } from "react";
import { AppContext } from "../CatQuery";

const FetchCatFacts = () => {
  const { refetch, catData } = useContext(AppContext);
  return (
    <>
      <button onClick={refetch} className="btn btn-primary mb-3">
        Generate Cat Facts
      </button>
      <h3>{catData.fact}</h3>
    </>
  );
};

export default FetchCatFacts;
