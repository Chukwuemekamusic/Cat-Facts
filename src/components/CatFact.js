import { FaTimes } from "react-icons/fa";

const CatFact = ({ cat, onDelete }) => {
  return (
    <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
      <h3 className="card-title">
        {cat.fact} <br />
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(cat.id)}
        />
      </h3>
      </div>
    </div>
  );
};

export default CatFact;
