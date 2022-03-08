import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <button>Cidadao</button>
            <Link to="/saude/vacinas"><button>Agente de saude</button></Link>
        </div>
     );
}
 
export default Home;