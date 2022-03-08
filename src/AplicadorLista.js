import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const AplicadorLista = () => {

    const {data:aplicadores, erro} = useFetchGET("/aplicadores");
    // const {data:vacinas, erro} = useFetchGET('/vacinas/');
    // if(vacians) console.log(vacians["vacians"]);
    // console.log("aqui");

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
                    {aplicadores && aplicadores.map( (aplicador) => (
                        <tr key={aplicador.id}>
                            <td>{aplicador.nome}</td>
                            {/* <td>{vacina.doses}</td> */}
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