import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const AplicadorNova = () => {
    
    const [nome, setNome] = useState('');
    const [coren, setCoren] = useState('');
    // const [batchNumber, setBatchNumber] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const aplicador = {nome, coren};
        // console.log(vacina);
        setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/aplicadores',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(aplicador),
        })
        .then(() => {
            setIsPending(false);
            history.push('/saude/aplicadores')
        })
    }

    return ( 
        <div>
            <div className="formulario">
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)}/>
                <label>Número coreme:</label>
                <input type="text" required value={coren} onChange={(e) => setCoren(e.target.value)}></input>
                {/* <label>Número de lote:</label>
                <input type="text" required value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)}></input> */}
                {!ispending && <button>Adicionar</button>}
                {ispending && <button>Adicionando ...</button>}
            </form>
            <Link to="/saude/aplicadores"><button>Voltar</button></Link>
        </div>
        </div>
     );
}
 
export default AplicadorNova;