let id = 0
class livros{
    constructor(isbn,titulo, autor, lingua, capa, editora, paginas, publicacao, preco, genero, quantidade){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.lingua = lingua;
        this.capa = capa;
        this.editora = editora;
        this.paginas = paginas;
        this.publicacao = publicacao;
        this.preco = preco;
        this.genero = genero;
        this.quantidade = quantidade;
    }
    //metodos de validação
    //this.isbn = validarIsbn(isbn)
}

export default livros