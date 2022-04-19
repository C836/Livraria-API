let id = 0
class funcionarios{
    constructor(nome, sobrenome, data_nascimento, data_admissao, telefone, e_mail, funcao){
        this.id = id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_nascimento = data_nascimento;
        this.data_admissao = data_admissao;
        this.telefone = telefone;
        this.e_mail = e_mail;
        this.funcao = funcao;
    }

}

export default funcionarios