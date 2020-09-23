import ApiService from '../apiservice'

class UsuarioService extends ApiService {

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais)
    }

    listarUsuarios(){
        return this.post('/listar')
    }
    
}

export default UsuarioService