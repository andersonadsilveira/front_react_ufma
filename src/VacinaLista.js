import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const VacinaLista = () => {

    const {data:vacinas, erro} = useFetchGET("/vacinas");
    // const {data:vacinas, erro} = useFetchGET('/vacinas/');
    // if(vacians) console.log(vacians["vacians"]);

    return ( 
        <div>
            {/* <h1>Lista de vacinas</h1>
            {vacinas && vacinas.map((vacina) => (
                <div className="lista-vacinas" key={vacina.id}>
                    <h3>{vacina.nome}</h3>
                    <p>{vacina.doses} doses</p>
                </div>
            ))} */}
            <table className="lista">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        {/* <th>Doses</th> */}
                        <th>Detalhes</th>
                    </tr>
                    {vacinas && vacinas.map( (vacina) => (
                        <tr key={vacina.id}>
                            <td>{vacina.nome}</td>
                            {/* <td>{vacina.doses}</td> */}
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