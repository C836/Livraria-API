class aluguel{
    constructor(livro, nome, data_de_aluguel, forma_de_pagamento, data_de_entrega){
        this.livro = livro ;
        this.nome = validar (nome);
        this.data_de_aluguel = data_de_aluguel;
        this.forma_de_pagamento = forma_de_pagamento;
        this.data_de_entrega = data_de_entrega;
    }
    validar (nome) {
        if(nome.length<1) return nome
        else throw new Error ("Nome incorreto!")
        
    }
}

export default aluguel