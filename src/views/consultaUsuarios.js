import React from 'react'
import {withRouter} from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class ConsultaUsuarios extends React.Component {
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
            </Card>
        )


    }

}

export default ConsultaUsuarios