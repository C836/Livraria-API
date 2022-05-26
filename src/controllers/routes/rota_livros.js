import express from "express";
import livro from "../../models/model_livros.js";
import criarTabelaLivros, {
  exibirLivros,
  exibirLivro,
  inserirLivro,
  editarLivro,
  deletarLivro,
} from "../../DAO/livros.js";

criarTabelaLivros();
const router_livros = express.Router();

//Listar todos os livros
router_livros.get("/", (req, res) => {
  exibirLivros((response) => {
    res.json(response);
  });
});

//Buscar livro por ID
router_livros.get("/id/:id", (req, res) => {
  const id = req.params.id;
  exibirLivro(id, (response) => {
    if (response.length === 0)
      res.send(`Id "${id}" não encontrado no banco de dados`);
    else res.json(response);
  });
});

//Inserir novo livro
router_livros.post("/add", (req, res) => {
  const body = req.body;
  const newLivro = new livro(
    body.isbn,
    body.titulo,
    body.autor,
    body.lingua,
    body.capa,
    body.editora,
    body.paginas,
    body.publicacao,
    body.preco,
    body.genero,
    body.quantidade,
    body.descricao,
    body.avaliacao
  );

  inserirLivro(newLivro, (response) => {
    res.send(`Livro ${newLivro.titulo} adicionado com sucesso.`);
  });
});

//Apagar livro por ID
router_livros.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  deletarLivro(id, (response) => {
    res.send(`Id "${id}" removido do banco de dados.`);
  });
});

//Modificar propriedades de um livro por seu ID
router_livros.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  exibirLivro(id, (oldLivro) => {
    const newLivro = new livro(
      body.isbn !== undefined ? body.isbn : oldLivro[0].isbn,
      body.titulo !== undefined ? body.titulo : oldLivro[0].titulo,
      body.autor !== undefined ? body.autor : oldLivro[0].autor,
      body.lingua !== undefined ? body.lingua : oldLivro[0].lingua,
      body.capa !== undefined ? body.capa : oldLivro[0].capa,
      body.editora !== undefined ? body.editora : oldLivro[0].editora,
      body.paginas !== undefined ? body.paginas : oldLivro[0].paginas,
      body.publicacao !== undefined ? body.publicacao : oldLivro[0].publicacao,
      body.preco !== undefined ? body.preco : oldLivro[0].preco,
      body.genero !== undefined ? body.genero : oldLivro[0].genero,
      body.quantidade !== undefined ? body.quantidade : oldLivro[0].quantidade,
      body.descricao !== undefined ? body.descricao : oldLivro[0].descricao,
      body.avaliacao !== undefined ? body.avaliacao : oldLivro[0].avaliacao
    );

    editarLivro(id, newLivro, (response) => {
      res.send(
        `Id "${id}" atualizado.\n\n ${JSON.stringify(newLivro, null, 2)}`
      );
    });
  });
});

export default router_livros;
