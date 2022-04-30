import { openDb } from "../infra/configdb.js"

export default async function criarTabelaFornecedores(){
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Fornecedores(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            cnpj INTEGER,
            endereco TEXT,
            contaBancaria INTEGER
          )`)
    })
}


export async function exibirFornecedores(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Fornecedores`)
        .then(res=>response(res))
    })
}


export async function exibirFornecedor(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Fornecedores" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirFornecedores(Fornecedores, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Fornecedores(
            nome,cnpj,endereco,contaBancaria) 
            VALUES(?,?,?,?)`,[
            Fornecedores.nome,
            Fornecedores.cnpj,
            Fornecedores.endereco,
            Fornecedores.contaBancaria,
          
        ])
        .then(response(true))
    })
}

export async function editarFornecedores(id, Fornecedores, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Fornecedores SET
            nome=?, cnpj=?, endereco=?, contaBancaria=?
            WHERE id=?`,[
            Fornecedores.nome,
            Fornecedores.cnpj,
            Fornecedores.endereco,
            Fornecedores.contaBancaria,
            id
        ])
        .then(res=> response(res))
    })
}

export async function deletarFornecedores(id, response){
    openDb().then(db=>{
        db.get(`DELETE FROM "Fornecedores" WHERE id = ${id}`)
        .then(response(true))
    })
}