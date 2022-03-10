import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const VacinaLista = () => {

    const {data:vacinas, erro} = useFetchGET("/vaccines?pageNumber=-1&pageSize=0");

    return ( 
        <div>
            <table className="lista">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Detalhes</th>
                    </tr>
                    {vacinas && vacinas["vacians"].map( (vacina) => (
                        <tr key={vacina.id}>
                            <td>{vacina.nome}</td>
                            <td><Link to={`/saude/vacinas/${vacina.id}`}><button className="botao-ir"></button></Link></td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            {erro && <h2>{erro}</h2> }
            <Link to="/saude/vacinas/nova"><button className="nova-vacina"> Adicionar nova vacina</button></Link>
        </div>
     );
}
 
export default VacinaLista;