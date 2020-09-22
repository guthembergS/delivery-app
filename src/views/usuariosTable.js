import React from 'react'

export default props => {

    const rows = props.usuarios.map(Usuario =>{
        return (
            <tr>
                <td>{Usuario.idUsuario}</td>
                <td>{Usuario.nome}</td>
                <td>{Usuario.email}</td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}