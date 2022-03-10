import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            {/* <h1>Home</h1> */}
            <Link to="/cidadao/consultas"><button className="cancelar">Cidadão</button></Link>
            <Link to="/saude/aplicacoes/nova"><button className="cancelar">Agente de saude</button></Link>
        </div>
     );
}
 
export default Home;