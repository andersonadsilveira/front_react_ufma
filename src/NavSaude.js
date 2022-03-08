import { Link } from "react-router-dom";

const NavSaude = () => {
    return ( 
        <nav className="navbar">
            {/* <h1>Aplicações de vacinas</h1> */}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/saude/aplicacoes">Aplicacões</Link>
                <Link to="/saude/vacinas">Vacinas</Link>
                <Link to="/saude/aplicadores">Aplicadores</Link>
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>New Blog</a> */}
            </div>
        </nav>
     );
}
 
export default NavSaude;