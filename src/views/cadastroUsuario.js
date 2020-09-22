import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter } from 'react-router-dom' 

import axios from 'axios'

class CadastroUsuario extends React.Component{

    state = {
         nome:'',
        email:'',
        senha:'',
        senhaRepeticao:''
    }

    salvarCadastro = () =>{
        console.log(this.state)

        axios.post("http://localhost:8080/api/usuarios",
        {nome:this.state.nome, email:this.state.email, senha: this.state.senha}).then(response => {

            this.props.history.push('/home')

            }).catch(erro => {
            console.log(erro.response)
            this.setState({msgErro: erro.response.data})
            })
    }

    cancelarCadastro = () =>{
        this.props.history.push('/login')
    }

    render(){
     return(   
            <div className="row">
                <div className="col-md-6" style={{position:'relative' ,left:'300px'}}>
                   <div className="bs-docs-section">
                        <Card title="Cadastro de Usuário">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Nome:*" htmlFor="exampleInputNome1">
                                                <input type="nome" id="inputNome" name="nome" 
                                                onChange={e => this.setState({nome: e.target.value})} 
                                                placeholder="Digite o Nome" className="form-control"/>
                                            </FormGroup>
                                            <FormGroup label="Email:*" name="email" htmlFor="exampleInputEmail1">
                                                <input type="email" id="inputEmail" value={this.state.email}
                                                     onChange={e => this.setState({email: e.target.value})} 
                                                     placeholder="Digite o Email" className="form-control"/>
                                            </FormGroup>
                                            <FormGroup label="Senha:*"  htmlFor="exampleInputPassword1">
                                            <input type="password" id="inputSenha" name="senha"
                                            onChange={e => this.setState({senha: e.target.value})}  
                                            placeholder="Password" className="form-control"/>
                                            </FormGroup>
                                            <FormGroup label="Confirmar Senha:*"  htmlFor="exampleInputPassword1">
                                            <input type="password" id="inputSenhaRepeticao" name="senhaRepeticao" 
                                                    onChange={e => this.setState({senhaRepeticao: e.target.value})} 
                                                     placeholder="Repetir Password" className="form-control"/>
                                            </FormGroup>
                                            <button onClick={this.salvarCadastro} type="button" className="btn btn-sucess">Salvar</button>
                                            <button onClick={this.cancelarCadastro} type="button" className="btn btn-danger">Cancelar</button>

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

export default CadastroUsuario