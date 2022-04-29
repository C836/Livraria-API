import { openDb } from "../infra/configdb.js"

export default async function criarTabelaClientes(){
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            sobrenome TEXT,
            cpf INTEGER,
            email TEXT,
            telefone INTEGER
          )`)
    })
}

export async function exibirClientes(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Clientes`)
        .then(res=>response(res))
    })
}

export async function exibirCliente(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Clientes" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirCliente(Clientes, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Clientes(
            nome,sobrenome,cpf,email,telefone) 
            VALUES(?,?,?,?,?)`,[
            Clientes.nome,
            Clientes.sobrenome,
            Clientes.cpf,
            Clientes.email,
            Clientes.telefone
        ])
        .then(response(true))
    })
}

export async function editarCliente(id, Clientes, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Clientes SET
            nome=?, sobrenome=?, cpf=?, email=?, telefone=?
            WHERE id=?`,[
            Clientes.nome,
            Clientes.sobrenome,
            Clientes.cpf,
            Clientes.email,
            Clientes.telefone,
            id
        ])
        .then(res=> response(res))
    })
}

export async function deletarCliente(id, response){
    openDb().then(db=>{
        db.get(`DELETE FROM "Clientes" WHERE id = ${id}`)
        .then(response(true))
    })
}

// export async function limparTabela(response){
//     openDb().then(db=>{
//         db.get(`
//         DELETE FROM Clientes;
//         UPDATE 'sqlite_sequence' SET 'seq'=0 WHERE 'name'='Clientes';
//         DELETE FROM 'sqlite_sequence' WHERE NAME='Clientes'`)
//         .then(response(true))
//     })
// }