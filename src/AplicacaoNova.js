import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import useFetchGET from "./useFetchGET";

const AplicacaoNova = () => {
    
    const {data:vacinas, erro} = useFetchGET("/vaccines");
    const {data:aplicadores, erro2} = useFetchGET("/applicators");
    
    
    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [idVacina,setIDVacina] = useState('');
    const [idAplicador,setIDAplicador] = useState('');
    const [dataAplicacao,setDataAplicacao] = useState('');
    const [dataNascimento,setDataNascimento] = useState('');
    
    const [vacinaNome,setVacinaNome] = useState('');
    // const [aplicadorCoren,setAplicadorCoren] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let aplicacao={"person":{"name":nome,"cpf":cpf,"birth_date":dataNascimento},"application_dt":dataAplicacao,"applicationDate":dataAplicacao};
        if(!idVacina)
            {
                aplicacao["vaccine_id"] = vacinas["vacians"][0]["id"];
                aplicacao["vaccineId"] = vacinas["vacians"][0]["id"];
            }
            else{
                aplicacao["vaccine_id"] = idVacina;
                aplicacao["vaccineId"] = idVacina;
            }

        if(!idAplicador)
        {
            aplicacao["applicator_id"] = aplicadores["vaccines"][0]["id"];
            aplicacao["applicatorId"] = aplicadores["vaccines"][0]["id"];
        }
        else{
            aplicacao["applicator_id"] = idAplicador;
            aplicacao["applicatorId"] = idAplicador;
        }
        
        console.log(aplicacao);
        setIsPending(true);

        fetch(process.env.REACT_APP_SERVER_URL+'/applications/persons',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(aplicacao),
        })
        .then(() => {
            setIsPending(false);
            history.push('/')
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
                <input type="date" required value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                <label>Vacina:</label>
                <select required  onChange={(e) => setIDVacina(e.target.value)}>
                    {vacinas && vacinas["vacians"].map( (vacina) => (
                        <option key={vacina.id} value={vacina.id} >{vacina.nome}</option>
                    ) )}
                </select>
                <label>Aplicador:</label>
                <select required  onChange={(e) => setIDAplicador(e.target.value)}>
                    {aplicadores && aplicadores["vaccines"].map( (aplicador) => (
                        <option key={aplicador.id} value={aplicador.id} >{aplicador.name}</option>
                    ) )}
                </select>
                <label>Data Aplicação:</label>
                <input type="date" required value={dataAplicacao} onChange={(e) => setDataAplicacao(e.target.value)}/>
                {!ispending && <button>Adicionar</button>}
                {ispending && <button>Adicionando ...</button>}
            </form>
            <Link to="/saude/vacinas"><button>Voltar</button></Link>
        </div>
        </div>
     );
}
 
export default AplicacaoNova;