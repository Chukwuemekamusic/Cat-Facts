import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatApp from "./app/catApp/CatApp";
import ExcuseApp from "./app/excuseApp/ExcuseApp";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>This is my React Apps Page</h1>} />
        <Route path="/catfacts" element={<CatApp />} />
        <Route path="/excuse" element={<ExcuseApp />} />

        <Route path="*" element={<h2>Page not Found!!!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
