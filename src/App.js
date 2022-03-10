import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import VacinaLista from './VacinaLista';
import VacinaDetalhes from './VacinaDetalhes';
import NavSaude from './NavSaude';
import NavCidadao from './NavCidadao';
import VacinaNova from './VacinaNova';
import AplicadorLista from './AplicadorLista';
import AplicadorNova from './AplicadorNova';
import AplicadorDetalhes from './AplicadorDetalhes';
// import AplicacaoLista from './AplicacaoLista';
import AplicacaoNova from './AplicacaoNova';
import VacinasTomadas from './VacinasTomadas';
import ConsultaVacina from './ConsultaVacinas';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/saude/*">
            <NavSaude/>
          </Route>
          <Route exact path="/*">
            <NavCidadao/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home/>
            {/* <AplicacaoLista/> */}
          </Route>
          <Route exact path="/cidadao/consultas">
            <ConsultaVacina/>
          </Route>
          <Route exact path="/cidadao/consultas/:id">
            <VacinasTomadas/>
          </Route>
          <Route exact path="/saude/vacinas">
            <VacinaLista/>
          </Route>
          <Route exact path="/saude/vacinas/nova">
            <VacinaNova/>
          </Route>
          <Route exact path="/saude/vacinas/:id">
            <VacinaDetalhes/>
          </Route>
          <Route exact path="/saude/aplicadores">
            <AplicadorLista/>
          </Route>
          <Route exact path="/saude/aplicadores/nova">
            <AplicadorNova/>
          </Route>
          <Route exact path="/saude/aplicadores/:id">
            <AplicadorDetalhes/>
          </Route>
          {/* <Route exact path="/saude/aplicacoes"> */}
            {/* <AplicacaoLista/> */}
          {/* </Route> */}
          <Route exact path="/saude/aplicacoes/nova">
            <AplicacaoNova/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
