import express from "express";
import cliente from '../../model/cliente.js'
import database from '../../infra/database.js'

const router_clientes = express.Router();

//Listar todos os usuários 
router_clientes.get('/', (req,res)=>{
    res.send(database.clientes)
})

//Buscar usuários por ID
router_clientes.get('/id/:id', (req,res)=>{
    const id = req.params.id
    const pesquisa = database.clientes[id];

    res.send(pesquisa)
})

//Inserir novo usuário
router_clientes.post('/add', (req,res)=>{
    const body = req.body
    const newUser = new cliente(body.nome, body.sobrenome, body.cpf, body.email, body.telefone)

    database.clientes.push(newUser)
    res.send(`Cliente ${newUser.nome} ${newUser.sobrenome} adicionado com sucesso.`)
})

//Apagar usuário por ID
router_clientes.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    database.clientes.splice(id, 1)

    res.send(`Id "${id}" removido do banco de dados.`)
})

//Modificar propriedades de um usuário por seu ID
router_clientes.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body
    let dbCliente = database.clientes[id]
    
    let usuarioEdit = {
        id: dbCliente.nome.id, 
        nome: body.nome!==undefined ? body.nome : dbCliente.nome, 
        sobrenome: body.sobrenome!==undefined ? body.sobrenome : dbCliente.sobrenome, 
        cpf: body.cpf!==undefined ? body.cpf : dbCliente.cpf, 
        email: body.email!==undefined ? body.email : dbCliente.email, 
        telefone: body.telefone!==undefined ? body.telefone : dbCliente.telefone, 
    };

    database.clientes[id] = usuarioEdit;

    res.send(`Id "${id}" atualizado.`)
})

export default router_clientes