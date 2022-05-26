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
            capa TEXT,
            editora TEXT,
            paginas INTEGER,
            publicacao DATE,
            preco INTEGER,
            genero TEXT,
            quantidade INTEGER,
            descricao TEXT,
            avaliacao TEXT
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
            INSERT INTO Livros(isbn, titulo, autor, lingua, capa , editora,
                 paginas, publicacao, preco , genero, quantidade, descricao, avaliacao)
            VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,[
            
        Livros.isbn,
        Livros.titulo,
        Livros.autor ,
        Livros.lingua ,
        Livros.capa ,
        Livros.editora ,
        Livros.paginas ,
        Livros.publicacao ,
        Livros.preco ,
        Livros.genero ,
        Livros.quantidade ,
        Livros.descricao ,
        Livros.avaliacao
        ])
        .then(response(true))
    })
}

export async function editarLivro(id, Livros, response){
    openDb().then(db=>{
        db.run(`
            UPDATE Livros SET
            isbn=?, titulo=?, autor=?, lingua=?, capa=? , editora=?, paginas=?, publicacao=?, preco=?, genero=?, quantidade=?, descricao=?, avaliacao=? WHERE id=?`,[
                Livros.isbn,
                Livros.titulo,
                Livros.autor ,
                Livros.lingua ,
                Livros.capa ,
                Livros.editora ,
                Livros.paginas ,
                Livros.publicacao ,
                Livros.preco ,
                Livros.genero ,
                Livros.quantidade ,
                Livros.descricao ,
                Livros.avaliacao ,
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