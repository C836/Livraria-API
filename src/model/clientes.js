let id = 0
class cliente{
    constructor(nome, sobrenome, cpf, email, telefone){
        this.id = id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone
    }
}

export default cliente