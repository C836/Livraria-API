let id = 0
class Usuario{
    constructor(nome, sobrenome, email, senha){
        this.id = id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha
    }
}

export default Usuario