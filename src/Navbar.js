import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><button>Home</button></Link>
            <Link to="/catfacts"><button>CatApp</button></Link>
            <Link to="/excuse"><button>ExcuseApp</button></Link>
            <Link to="/catquery"><button>Cat_QueryApp</button></Link>
        </nav>
    )
}

export default Navbar