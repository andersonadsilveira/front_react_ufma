import { Link } from "react-router-dom";

const NavSaude = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/saude/aplicacoes/nova">Aplicacões</Link>
                <Link to="/saude/vacinas">Vacinas</Link>
                <Link to="/saude/aplicadores">Aplicadores</Link>
            </div>
        </nav>
     );
}
 
export default NavSaude;