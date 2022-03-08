import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const AplicacaoLista = () => {

    const {data:aplicacoes, erro} = useFetchGET("/aplicacoes");
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
                        <th>Vacina</th>
                        <th>Aplicador(COREN)</th>
                    </tr>
                    {aplicacoes && aplicacoes.map( (aplicacao) => (
                        <tr key={aplicacao.id}>
                            <td>{aplicacao.pessoa.nome}</td>
                            {/* <td>{vacina.doses}</td> */}
                            <td>{aplicacao.vacina}</td>
                            <td>{aplicacao.coren}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
            {erro && <h2>{erro}</h2> }
            <Link to="/saude/aplicacoes/nova"><button className="nova-vacina">Registrar aplicação de vacina</button></Link>
        </div>
     );
}
 
export default AplicacaoLista;