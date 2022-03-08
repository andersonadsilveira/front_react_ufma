import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import useFetchGET from "./useFetchGET";

const AplicacaoNova = () => {
    
    const {data:vacinas, erro} = useFetchGET("/vacinas");
    const {data:aplicadores, erro2} = useFetchGET("/aplicadores");
    
    
    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [data,setData] = useState('');
    
    const [vacinaNome,setVacinaNome] = useState('');
    const [aplicadorCoren,setAplicadorCoren] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let aplicacao={"pessoa":{"nome":nome,"cpf":cpf,"birthDate":data,"birth_date":data}};
        if(!vacinaNome)
            {
                aplicacao["vacina"] = vacinas[0]["nome"];
            }
            else{
                aplicacao["vacina"] = vacinaNome;
            }

        if(!aplicadorCoren)
        {
            aplicacao["coren"] = aplicadores[0]["coren"];
        }
        else{
            aplicacao["coren"] = aplicadorCoren;
        }
        
        console.log(aplicacao);
        setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/aplicacoes/',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(aplicacao),
        })
        .then(() => {
            setIsPending(false);
            history.push('/saude/aplicacoes')
        })
    }

    return ( 
        <div>
            <div className="formulario">
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)}/>
                <label>CPF:</label>
                <input type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                <label>Data Nascimento:</label>
                <input type="date" required value={data} onChange={(e) => setData(e.target.value)}/>
                <label>Vacina:</label>
                <select required  onChange={(e) => setVacinaNome(e.target.value)}>
                    {vacinas && vacinas.map( (vacina) => (
                        <option key={vacina.id} value={vacina.nome} >{vacina.nome}</option>
                    ) )}
                </select>
                <label>Aplicador:</label>
                <select required  onChange={(e) => setAplicadorCoren(e.target.value)}>
                    {aplicadores && aplicadores.map( (aplicador) => (
                        <option key={aplicador.id} value={aplicador.coren} >{aplicador.nome}</option>
                    ) )}
                </select>
                {!ispending && <button>Adicionar</button>}
                {ispending && <button>Adicionando ...</button>}
            </form>
            <Link to="/saude/vacinas"><button>Voltar</button></Link>
        </div>
        </div>
     );
}
 
export default AplicacaoNova;