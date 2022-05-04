import { openDb } from "../infra/configdb.js"

export default async function criarTabelaAluguel(){
    console.log ("Run!")
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Aluguel(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            livro TEXT,
            nome TEXT,
            data_de_aluguel DATE,
            forma_de_pagamento TEXT,
            data_de_entrega DATE
          )`)
    })
}


export async function exibirAlugueis(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Aluguel`)
        .then(res=>response(res))
    })
}


export async function exibirAluguel(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Aluguel" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirAluguel(Aluguel, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Aluguel(
            livro,nome,data_de_aluguel,forma_de_pagamento,data_de_entrega) 
            VALUES(?,?,?,?,?)`,[
            Aluguel.livro,
            Aluguel.nome,
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
            UPDATE Aluguel SET
            livro=?, nome=?, data_de_aluguel=?, forma_de_pagamento=?, data_de_entrega=?
            WHERE id=?`,[
            Aluguel.livro,
            Aluguel.nome,
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
        db.get(`DELETE FROM Aluguel WHERE id = ${id}`)
        .then(response(true))
    })
}