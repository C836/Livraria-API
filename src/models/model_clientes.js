class cliente{
    constructor(nome, sobrenome, cpf, email, telefone){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = this.validar(cpf);
        this.email = email;
        this.telefone = telefone;
    }
    validar(cpf){
        if(String(cpf).length===11) return cpf
    }
}

export default cliente