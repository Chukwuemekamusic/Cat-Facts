import CatFact from "./CatFacts";
import { useContext } from 'react';
import { AppContext } from "../CatApp";

const GenerateCatFacts = () => {
  const { generate, catFacts} = useContext(AppContext)
  return (
    <div className="container">
      <button className="btn btn-primary mb-3" onClick={generate}>
        Generate Cat Fact
      </button>
      <div className="row">
        {catFacts.map((cat) => (
          <div className="col-md-6" key={cat.id}>
            <CatFact cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateCatFacts;