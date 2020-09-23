import React from 'react'

export default props => {

    const rows = props.usuarios.map(Usuarios =>{
        return (
            <tr>
                <td>{Usuarios.idUsuario}</td>
                <td>{Usuarios.nome}</td>
                <td>{Usuarios.email}</td>
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