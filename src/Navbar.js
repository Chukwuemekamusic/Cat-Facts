import { Link } from "react-router-dom";
import useActive from "./custom_hooks/useActive";

const Navbar = () => {
  const [handleClick, activeClass] = useActive('')
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <button onClick={()=>handleClick('home')} className={activeClass('home')}>
          Home
        </button>
      </Link>
      <Link to="/catfacts">
        <button onClick={()=>handleClick('catapp')} className={`nav-item ${activeClass('catapp')}`}>CatApp</button>
      </Link>
      <Link to="/excuse">
        <button onClick={()=>handleClick('excuseapp')} className={activeClass('excuseapp')}>ExcuseApp</button>
      </Link>
      <Link to="/catquery">
        <button onClick={()=>handleClick('cat_queryapp')} className={activeClass('cat_queryapp')}>Cat_QueryApp</button>
      </Link>
      <Link to="/register-form">
        <button onClick={()=>handleClick('registerform')} className={activeClass('registerform')}>Register Form</button>
      </Link>
      <Link to="/login-form">
        <button onClick={()=>handleClick('logform')} className={activeClass('logform')}>Log Form</button>
      </Link>
    </nav>
  );
};

export default Navbar;
