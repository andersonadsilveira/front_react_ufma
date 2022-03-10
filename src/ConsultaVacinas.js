import { Link } from "react-router-dom";
import VacinasTomadas from "./VacinasTomadas";
import { useState, useEffect } from 'react';



const ConsultaVacina = () => {

    const [cpf,setCPF] = useState('');

    return ( 
    <div>
        <h3>Digite o número de CPF</h3>
        <input type="text" value={cpf} onChange={(e) => setCPF(e.target.value)}></input>
        {/* <Link to="/cidadao/consultas/1"><button>Cidadão</button></Link> */}
        <VacinasTomadas CPF={cpf} />
    </div> );
}
 
export default ConsultaVacina;