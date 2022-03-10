import { Link } from "react-router-dom";

const NavCidadao = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>
     );
}
 
export default NavCidadao;