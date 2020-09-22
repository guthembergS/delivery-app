import React from 'react'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import { Route,Switch,HashRouter} from 'react-router-dom'
import ConsultaUsuarios from '../views/consultaUsuarios'

function Rotas() {

    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastroUsuarios" component={CadastroUsuario}/>
                <Route path="/home" component={Home}/>
                <Route path="/consultaUsuarios" component={ConsultaUsuarios}/>
            </Switch>
        </HashRouter>

    )
}

export default Rotas