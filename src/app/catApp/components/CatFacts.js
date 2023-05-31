import React from 'react'
import { FaTimes } from "react-icons/fa";

const CatFacts = ({ cat, onDelete }) => {
  return (
    <>
    <h3>
      {cat.fact} <br />
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(cat.id)}
      />
    </h3>
    <hr />
  </>
);
}

export default CatFacts





