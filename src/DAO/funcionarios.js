import { openDb } from "../infra/configdb.js"

export default async function criarTabelaFuncionarios(){
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Funcionarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            sobrenome TEXT,
            data_nascimento DATE,
            data_admissao DATE,
            telefone INTEGER,
            email TEXT,
            funcao TEXT
          )`)
    })
}

export async function exibirFuncionarios(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Funcionarios`)
        .then(res=>response(res))
    })
}

export async function exibirFuncionario(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Funcionarios" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirFuncionarios(Funcionarios, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Funcionarios(
            nome,sobrenome,data_nascimento,data_admissao,telefone,email,funcao) 
            VALUES(?,?,?,?,?,?,?)`,[
            Funcionarios.nome,
            Funcionarios.sobrenome,
            Funcionarios.data_nascimento,
            Funcionarios.data_admissao,
            Funcionarios.telefone,
            Funcionarios.email,
            Funcionarios.funcao
        ])
        .then(response(true))
    })
}

export async function editarFuncionario(id, Funcionario, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Funcionarios SET
            nome=?, sobrenome=?, data_nascimento=?, data_admissao=?, telefone=?, email=?, funcao=?
            WHERE id=?`,[
            Funcionarios.nome,
            Funcionarios.sobrenome,
            Funcionarios.data_nascimento,
            Funcionarios.data_admissao,
            Funcionarios.telefone,
            Funcionarios.email,
            Funcionarios.funcao,
            id
        ])
        .then(res=> response(res))
    })
}

export async function deletarFuncionario(id, response){
    openDb().then(db=>{
        db.get(`DELETE FROM "Funcionarios" WHERE id = ${id}`)
        .then(response(true))
    })
}
