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

export async function inserirFuncionario(funcionario, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Funcionarios(
            nome,sobrenome,data_nascimento,data_admissao,telefone,email,funcao) 
            VALUES(?,?,?,?,?,?,?)`,[
            funcionario.nome,
            funcionario.sobrenome,
            funcionario.data_nascimento,
            funcionario.data_admissao,
            funcionario.telefone,
            funcionario.email,
            funcionario.funcao
        ])
        .then(response(true))
    })
}

export async function editarFuncionario(id, funcionario, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Funcionarios SET
            nome=?, sobrenome=?, data_nascimento=?, data_admissao=?, telefone=?, email=?, funcao=?
            WHERE id=?`,[
            funcionario.nome,
            funcionario.sobrenome,
            funcionario.data_nascimento,
            funcionario.data_admissao,
            funcionario.telefone,
            funcionario.email,
            funcionario.funcao,
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
