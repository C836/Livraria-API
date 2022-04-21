let id = 0
class cliente{
    constructor(nome, sobrenome, cpf, email, telefone){
        this.id = id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = this.validar(cpf);
        this.email = email;
        this.telefone = telefone;
    }
    validar(cpf){
        if(cpf.length===11) return cpf
        else throw new Error ('erro')
    }
}

export default cliente