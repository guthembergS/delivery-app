import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter } from 'react-router-dom' 
import CadastroUsuario from './cadastroUsuario'
import UsuarioService from '../app/service/usuarioService'


class Login extends React.Component{

    state = {
        email:'',
        senha:'',
        msgErro: null

    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = () =>{
        this.service.autenticar({
                email:this.state.email, 
                senha:this.state.senha
            }).then(response => {
            sessionStorage.setItem('nome_session',response.data.nome)
            this.props.history.push('/home')

        }).catch(erro => {
            console.log(erro.response)
            this.setState({msgErro: erro.response.data})
        })
        
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastroUsuarios')
    }


    

    render(){
     return(   
            <div className="row">
                <div className="col-md-6" style={{position:'relative' ,left:'300px'}}>
                   <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row"><span>{this.state.msgErro}</span></div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email:*" htmlFor="exampleInputEmail1">
                                                <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"/>
                                            </FormGroup>
                                            <FormGroup label="Senha:*" htmlFor="exampleInputPassword1">
                                            <input type="password" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </FormGroup>
                                            <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                                            <button onClick={this.prepareCadastrar} type="button" className="btn btn-danger" href="#/cadastroUsuarios" >Cadastrar</button>

                                        </fieldset>

                                    </div>
                                </div>
                            </div>
                        </Card> 
                   </div>
                   
                </div>
            </div>
        
     )
    }

}

export default withRouter(Login ,CadastroUsuario)