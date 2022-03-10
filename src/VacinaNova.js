import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const VacinaNova = () => {
    
    const [name, setName] = useState('');
    const [doses, setDoses] = useState('');
    const [batchNumber, setBatchNumber] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const vacina = {name,doses,"batch-number":batchNumber};
        console.log(vacina);
        setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/vaccines',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(vacina),
        })
        .then(() => {
            setIsPending(false);
            history.push('/saude/vacinas')
        })
    }

    return ( 
        <div>
            <div className="formulario">
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Número de doses:</label>
                <input type="text" required value={doses} onChange={(e) => setDoses(e.target.value)}></input>
                <label>Número de lote:</label>
                <input type="text" required value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)}></input>
                {!ispending && <button>Adicionar</button>}
                {ispending && <button>Adicionando ...</button>}
            </form>
            <Link to="/saude/vacinas"><button>Voltar</button></Link>
        </div>
        </div>
     );
}
 
export default VacinaNova;