import { openDb } from "../infra/configdb.js"

export default async function criarTabelaLivros(){
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS Livros(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            isbn INTEGER,
            titulo TEXT,
            autor TEXT,
            lingua TEXT,
            editora TEXT,
            paginas INTEGER,
            publicacao DATE,
            preco INTEGER,
            genero TEXT,
            quantidade INTEGER

          )`)
    })
}


export async function exibirLivros(response){
    openDb().then(db=>{
        db.all(`SELECT * FROM Livros`)
        .then(res=>response(res))
    })
}

export async function exibirLivro(id, response){
    openDb().then(db=>{
        db.all(`SELECT * FROM "Livros" WHERE id = ${id}`)
        .then(res=>response(res))
    })
}

export async function inserirLivro(Livros, response){
    openDb().then(db=>{
        db.run(`
            INSERT INTO Livros(isbn, titulo, autor, lingua, editora,
                 paginas, publicacao, genero, quantidade, preco)
            VALUES(?,?,?,?,?,?,?,?,?,?)`,[
            
        Livros.isbn,
        Livros.titulo,
        Livros.autor ,
        Livros.lingua ,
        Livros.editora ,
        Livros.paginas ,
        Livros.publicacao ,
        Livros.preco ,
        Livros.genero ,
        Livros.quantidade 
        ])
        .then(response(true))
    })
}

export async function editarLivro(id, Livros, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Livros SET
            isbn=?, titulo=?, autor=?, lingua=?, editora=?, paginas=?, publicacao=?, preco=?, genero=?, quantidade=?
            WHERE id=?`,[
                Livros.isbn,
                Livros.titulo,
                Livros.autor ,
                Livros.lingua ,
                Livros.editora ,
                Livros.paginas ,
                Livros.publicacao ,
                Livros.preco ,
                Livros.genero ,
                Livros.quantidade ,
                id
        ])
        .then(res=> response(res))
    })
}

export async function deletarLivro(id, response){
    openDb().then(db=>{
        db.get(`DELETE FROM "Livros" WHERE id = ${id}`)
        .then(response(true))
    })
}