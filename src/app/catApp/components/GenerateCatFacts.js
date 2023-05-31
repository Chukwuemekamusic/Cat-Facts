import CatFact from "./CatFacts";

const GenerateCatFacts = ({ generate, catFacts, onDelete }) => {
  return (
    <div className="container">
      <button className="btn btn-primary mb-3" onClick={generate}>
        Generate Cat Fact
      </button>
      <div className="row">
        {catFacts.map((cat) => (
          <div className="col-md-6" key={cat.id}>
            <CatFact cat={cat} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateCatFacts;