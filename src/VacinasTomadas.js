import useFetchGET from "./useFetchGET";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";

const VacinasTomadas = (props) => {
    const cpf = "1212";

    const {data:vacinas, erro} = useFetchGET('/applications/persons/'+props.CPF);
    console.log(vacinas);

    return ( 
        <div>
            <table className="lista">
                <tbody>
                    <tr>
                        <th>Vacina</th>
                        <th>Aplicador</th>
                        <th>Data</th>
                    </tr>
                    {vacinas && vacinas.map( (vacina) => (
                        <tr key={vacina.id}>
                            <td>{vacina.vaccine_info.name}</td>
                            <td>{vacina.applicator_info.name}</td>
                            <td>{vacina.application_date}</td>
                            {/* <td><Link to={`/saude/aplicadores/${vacina.id}`}><button className="botao-ir"></button></Link></td> */}
                        </tr>
                    ) )}
                </tbody>
            </table>
            {/* {erro && <h2>{erro}</h2> } */}
            {/* <Link to="/cidadao/consultas"><button className="nova-vacina"> Nova consulta</button></Link> */}
        </div>
     );
}
 
export default VacinasTomadas;