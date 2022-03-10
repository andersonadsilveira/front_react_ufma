import useFetchGET from "./useFetchGET";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";

const AplicadorDetalhes = () => {

    const {id} = useParams();
    const {data:aplicador, erro} = useFetchGET('/applicators/'+id);
    const [editing,setEditing] = useState(false);
    const [nomeNovo,setNomeNovo] = useState('');
    const [cpfNovo,setCPFNovo] = useState('');
    const [corenNovo,setCorenNovo] = useState('');

    const history = useHistory();

    const handleClickD = () => {
        fetch(process.env.REACT_APP_SERVER_URL + '/applicators/' + id,{
            method: 'DELETE',
        })
        .then(() => {
            history.push('/saude/aplicadores')
        })
    }

    const handleClickE = () => {
        setEditing(true);
        setNomeNovo(aplicador.name);
        setCPFNovo(aplicador.cpf);
        setCorenNovo(aplicador.coren);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const aplicadorNova = {"name":nomeNovo, "coren":corenNovo, "cpf":cpfNovo};

        fetch(process.env.REACT_APP_SERVER_URL+'/applicators/'+id,{
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(aplicadorNova),
        })
        .then(() => {
            setEditing(false);
            history.push('/saude/aplicadores');
        })
    }

    const handleClickC = () => {
        setEditing(false);
    }

    return ( 
        <div>
            <table className="lista">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Coreme</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                        <th>Voltar</th>
                    </tr>
                    {aplicador &&  (
                        <tr key={aplicador.id}>
                            <td>{aplicador.name}</td>
                            <td>{aplicador.cpf}</td>
                            <td>{aplicador.coren}</td>
                            <td><button className="botao-editar" onClick={handleClickE}></button></td>
                            <td><button className="botao-delete" onClick={handleClickD}></button></td>
                            <td><Link to='/saude/aplicadores/'><button className="botao-ir"></button></Link></td>
                        </tr>
                    ) }
                </tbody>
            </table>
            {editing && (
                <div>
                <form className="formulario" onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" required value={nomeNovo} onChange={(e) => setNomeNovo(e.target.value)}/>
                <label>CPF:</label>
                <input type="text" required value={cpfNovo} onChange={(e) => setCPFNovo(e.target.value)}/>
                <label>Número do Coren:</label>
                <input type="text" required value={corenNovo} onChange={(e) => setCorenNovo(e.target.value)}></input>
                <button>Atualizar</button>
                </form>
                <button className="cancelar" onClick={handleClickC}>Cancelar</button>
                </div>
            )}
        </div>
     );
}
 
export default AplicadorDetalhes;