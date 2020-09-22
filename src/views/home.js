import React from 'react'
import axios from 'axios'
import Card from '../components/card'
import UsuariosTable from './usuariosTable'

class Home extends React.Component{

    state = {
        nome: ''
    }

    componentDidMount(){
        const usulogado =  sessionStorage.getItem('nome_session')
        this.setState({nome: usulogado})
    }

    
    render(){
        const usuarios = [{idUsuario: '1',nome:'augusto', email:'augusto@gmail.com'}]

        return(
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo {this.state.nome}!</h1>
                    <p className="lead">Esse é seu sistema de Delivery.</p>
                    <hr className="my-4"/>

                    <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/cadastroUsuarios" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="#/cadastroPratos" role="button"><i className="fa fa-users"></i>  Cadastrar Pratos</a>
                    </p>

                   
                </div>


        )
    }
}

export default Home