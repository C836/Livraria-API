import express from "express";
import cliente from '../../model/clientes.js'
import database from './../../infra/database.js'

const router = express.Router();

//Listar todos os usuários 
router.get('/', (req,res)=>{
    res.send(database)
})

//Buscar usuários por ID
router.get('/id/:id', (req,res)=>{
    const id = req.params.id
    const pesquisa = database.clientes[id];

    res.send(pesquisa)
})

//Inserir novo usuário
router.post('/add', (req,res)=>{
    const body = req.body
    const newUser = new cliente(body.nome, body.sobrenome, body.cpf, body.email, body.telefone)

    database.clientes.push(newUser)
    res.send(`Usuário ${newUser.nome} ${newUser.sobrenome} adicionado com sucesso.`)
})

//Apagar usuário por ID
router.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    database.clientes.splice(id, 1)

    res.send(`Id "${id}" removido do banco de dados.`)
})

//Modificar propriedades de um usuário por seu ID
router.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body
    
    let usuarioEdit = {
        id: id, 
        nome: body.nome!==undefined ? body.nome : database.clientes[id].nome, 
        sobrenome: body.sobrenome!==undefined ? body.sobrenome : database.clientes[id].sobrenome, 
        cpf: body.cpf!==undefined ? body.cpf : database.clientes[id].cpf, 
        email: body.email!==undefined ? body.email : database.clientes[id].email, 
        telefone: body.telefone!==undefined ? body.telefone : database.clientes[id].telefone, 
    };

    database.clientes[id] = usuarioEdit;

    res.send(`Id "${id}" atualizado.`)
})

export default router