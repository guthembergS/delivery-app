import React from 'react'
import {withRouter} from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import UsuariosTable from './usuariosTable'
import UsuarioService from '../app/service/usuarioService'

class ConsultaUsuarios extends React.Component {
    

    state = {
        Usuarios: []
    }

    constructor(){
        super();
        this.service = new UsuarioService();

        this.service.listarUsuarios().then(response => {
        this.setState({Usuarios: response.data})

        }).catch(erro => {
            console.log(erro.response)
            this.setState({msgErro: erro.response.data})
        })
    }
    
    render(){
      
        

        return(

            <Card title="Consulta Usuarios">
                <div className="row">
                    <div className="col-md-6" style={{position:'relative' ,left:'300px'}}>
                        <div className="bs-component">
                            <FormGroup htmlFor="inpuNome" label="Nome">
                            <input type="text" className="form-control" id="id" placeholder="Digite o nome"/>
                            </FormGroup>
                        </div>
                   </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                         <UsuariosTable usuarios={this.state.Usuarios}/>
                        </div>
                        
                    </div>
                </div>
            </Card>
        )


    }

}

export default ConsultaUsuarios