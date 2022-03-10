import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const AplicadorLista = () => {

    const {data:aplicadores, erro} = useFetchGET("/applicators");

    return ( 
        <div>
            <table className="lista">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Detalhes</th>
                    </tr>
                    {aplicadores && aplicadores["vaccines"].map( (aplicador) => (
                        <tr key={aplicador.id}>
                            <td>{aplicador.name}</td>
                            <td><Link to={`/saude/aplicadores/${aplicador.id}`}><button className="botao-ir"></button></Link></td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            {erro && <h2>{erro}</h2> }
            <Link to="/saude/aplicadores/nova"><button className="nova-vacina"> Adicionar novo aplicador</button></Link>
        </div>
     );
}
 
export default AplicadorLista;