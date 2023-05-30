import CatFact from "./CatFact"

const GenerateCatFact = ({generate, catFacts, onDelete }) => {
  return (
    <>
      <button onClick={generate}>Generate Cat Fact</button>
      {catFacts.map((cat) => (
        <CatFact key={cat.id} cat={cat} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default GenerateCatFact