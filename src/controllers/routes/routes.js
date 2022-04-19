import express from "express";
import Usuario from './../../model/user.js'
import database from './../infra/database.js'

const router = express.Router();

//Listar todos os usuários 
router.get('/', (req,res)=>{
    res.send(database)
})

//Buscar usuários por ID
router.get('/id/:id', (req,res)=>{
    const id = req.params.id
    const pesquisa = database.usuarios[id];

    res.send(pesquisa)
})

//Inserir novo usuário
router.post('/add', (req,res)=>{
    const body = req.body
    const newUser = new Usuario(body.nome, body.sobrenome, body.email, body.senha)

    database.usuarios.push(newUser)
    res.send(`Usuário ${newUser.nome} ${newUser.sobrenome} adicionado com sucesso.`)
})

//Apagar usuário por ID
router.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    database.usuarios.splice(id, 1)

    res.send(`Id "${id}" removido do banco de dados.`)
})

//Modificar propriedades de um usuário por seu ID
router.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body
    
    let usuarioEdit = {
        id: id, 
        nome: body.nome!==undefined ? body.nome : database.usuarios[id].nome, 
        sobrenome: body.sobrenome!==undefined ? body.sobrenome : database.usuarios[id].sobrenome, 
        email: body.email!==undefined ? body.email : database.usuarios[id].email, 
        senha: body.senha!==undefined ? body.senha : database.usuarios[id].senha, 
    };

    database.usuarios[id] = usuarioEdit;

    res.send(`Id "${id}" atualizado.`)
})

export default router