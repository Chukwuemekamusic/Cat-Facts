import React from 'react'
import { FaTimes } from "react-icons/fa";
import { useContext } from 'react';
import { AppContext } from "../CatApp";

const CatFacts = ({cat}) => {
const {onDelete} = useContext(AppContext)
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





