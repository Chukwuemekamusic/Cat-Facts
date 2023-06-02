import { Link } from "react-router-dom";
import { useState } from "react";

const Nav2 = () => {
    const [isActive, setActive] = useState('');
  
    const handleClick = (buttonName) => {
      setActive(buttonName);
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <button
            onClick={() => handleClick("home")}
            className={isActive === "home" ? "btn btn-primary" : ""}
          >
            Home
          </button>
        </Link>
        <Link to="/catfacts">
          <button
            onClick={() => handleClick("catapp")}
            className={isActive === "catapp" ? "btn btn-primary" : ""}
          >
            CatApp
          </button>
        </Link>
        {/* Add other buttons with onClick={handleClick} */}
      </nav>
    );
  };
  
  export default Nav2;
  