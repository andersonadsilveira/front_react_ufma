import useFetchGET from "./useFetchGET";
import { Link } from "react-router-dom";

const AplicacaoLista = () => {

    const {data:aplicacoes, erro} = useFetchGET("/aplicacoes");
    
    return ( 
        <div>
                        <table className="lista">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Vacina</th>
                        <th>Aplicador(COREN)</th>
                    </tr>
                    {aplicacoes && aplicacoes.map( (aplicacao) => (
                        <tr key={aplicacao.id}>
                            <td>{aplicacao.pessoa.nome}</td>
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