import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatApp from "./app/catApp/CatApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catfacts" element={<CatApp />} />
        <Route path="/" element={<h1>This is my React Apps Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
