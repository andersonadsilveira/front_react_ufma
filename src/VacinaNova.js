import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const VacinaNova = () => {
    
    const [nome, setNome] = useState('');
    const [doses, setDoses] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const vacina = {nome, doses};
        console.log(vacina);
        setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/vacinas',{
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
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)}/>
                <label>Número de doses:</label>
                <input type="text" required value={doses} onChange={(e) => setDoses(e.target.value)}></input>
                {!ispending && <button>Adicionar</button>}
                {ispending && <button>Adicionando ...</button>}
            </form>
            <Link to="/saude/vacinas"><button>Voltar</button></Link>
        </div>
        </div>
     );
}
 
export default VacinaNova;