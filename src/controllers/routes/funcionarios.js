import express from "express";
import funcionarios from '../../model/funcionarios.js'
import database from './../../infra/database.js'

const router_funcionarios = express.Router();

//Listar todos os usuários 
router_funcionarios.get('/', (req,res)=>{
    res.send(database.funcionarios)
})

//Buscar usuários por ID
// router_funcionarios.get('/id/:id', (req,res)=>{
//     const id = req.params.id
//     const pesquisa = database.clientes[id];

//     res.send(pesquisa)
// })

//Inserir novo usuário
router_funcionarios.post('/add', (req,res)=>{
    const body = req.body
    const newFuncionarios = new funcionarios(body.nome, body.sobrenome, body.data_nascimento, body.data_admissao, body.telefone, body.e_mail, body.funcao)

    database.funcionarios.push(newFuncionarios)
    res.send(`Usuário ${newFuncionarios.nome} ${newFuncionarios.sobrenome} adicionado com sucesso.`)
})

export default router_funcionarios