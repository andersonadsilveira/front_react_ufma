import useFetchGET from "./useFetchGET";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";

const VacinaDetalhes = () => {

    const {id} = useParams();
    const {data:vacina, erro} = useFetchGET('/vaccines/'+id);
    const [editing,setEditing] = useState(false);
    const [nomeNovo,setNomeNovo] = useState('');
    const [dosesNovo,setDosesNovo] = useState('');
    const [batchNumberNovo,setBatchNumberNovo] = useState('');
    // console.log(vacina);

    const history = useHistory();

    const handleClickD = () => {
        fetch(process.env.REACT_APP_SERVER_URL + '/vaccines/' + id,{
            method: 'DELETE',
        })
        .then(() => {
            history.push('/saude/vacinas')
        })
    }

    const handleClickE = () => {
        setEditing(true);
        setNomeNovo(vacina.nome);
        setDosesNovo(vacina.doses);
        setBatchNumberNovo(vacina.batchNumber);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const vacinaNova = {"name":nomeNovo, "doses":dosesNovo, "batch-number":batchNumberNovo, "batchNumber":batchNumberNovo};
        // console.log(vacinaNova);
        // setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/vaccines/'+id,{
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(vacinaNova),
        })
        .then(() => {
            setEditing(false);
            history.push('/saude/vacinas');
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
                        <th>Doses</th>
                        <th>Número de lote</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                        <th>Voltar</th>
                    </tr>
                    {vacina &&  (
                        <tr key={vacina.id}>
                            <td>{vacina.nome}</td>
                            <td>{vacina.doses}</td>
                            <td>{vacina.batchNumber}</td>
                            <td><button className="botao-editar" onClick={handleClickE}></button></td>
                            <td><button className="botao-delete" onClick={handleClickD}></button></td>
                            <td><Link to='/saude/vacinas/'><button className="botao-ir"></button></Link></td>
                        </tr>
                    ) }
                </tbody>
            </table>
            {editing && (
                <div>
                <form className="formulario" onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" required value={nomeNovo} onChange={(e) => setNomeNovo(e.target.value)}/>
                <label>Número de doses:</label>
                <input type="text" required value={dosesNovo} onChange={(e) => setDosesNovo(e.target.value)}></input>
                <label>Número de lote:</label>
                <input type="text" required value={batchNumberNovo} onChange={(e) => setBatchNumberNovo(e.target.value)}></input>
                <button>Atualizar</button>
                </form>
                <button className="cancelar" onClick={handleClickC}>Cancelar</button>
                </div>
            )}
        </div>
     );
}
 
export default VacinaDetalhes;