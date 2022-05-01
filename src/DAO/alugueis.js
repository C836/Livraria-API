import { openDb } from "../infra/configdb.js"

export default async function criarTabelaAlugueis(){
    console.log ("Run!")
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Alugueis(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            livro TEXT,
            nome TEXT,
            sobrenome TEXT,
            data_de_aluguel DATE,
            forma_de_pagamento TEXT,
            data_de_entrega DATE
          )`)
    })
}


export async function exibirAlugueis(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Alugueis`)
        .then(res=>response(res))
    })
}


export async function exibirAluguel(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Alugueis" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirAluguel(Aluguel, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Alugueis(
            livro,nome,sobrenome,data_de_aluguel,forma_de_pagamento,data_de_entrega) 
            VALUES(?,?,?,?,?,?)`,[
            Aluguel.livro,
            Aluguel.nome,
            Aluguel.sobrenome,
            Aluguel.data_de_aluguel,
            Aluguel.forma_de_pagamento,
            Aluguel.data_de_entrega,
        ])
        .then(response(true))
    })
}

export async function editarAluguel(id, Aluguel, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Alugueis SET
            livro=?, nome=?, sobrenome=?, data_de_aluguel=?, forma_de_pagamento=?, data_de_entrega=?
            WHERE id=?`,[
            Aluguel.livro,
            Aluguel.nome,
            Aluguel.sobrenome,
            Aluguel.data_de_aluguel,
            Aluguel.forma_de_pagamento,
            Aluguel.data_de_entrega,
            id
        ])
        .then(res=> response(res))
    })
}

export async function deletarAluguel(id, response){
    openDb().then(db=>{
        db.get(`DELETE FROM Alugueis WHERE id = ${id}`)
        .then(response(true))
    })
}