import express from "express";
import fornecedores from '../../model/fornecedores.js'
import database from './../../infra/database.js'

const router_fornecedores = express.Router();

//Listar todos os fornecedores 
router_fornecedores.get('/', (req,res)=>{
    res.send(database.fornecedores)

})
//Inserir novo fornecedor
router_fornecedores.post('/add', (req,res)=>{
    const body = req.body
    const newFornecedor = new fornecedores(body.nome, body.cnpj, body.endereco, body.contaBancaria)

    database.fornecedores.push(newFornecedor)
    res.send(`Fornecedor ${newFornecedor.nome} adicionado com sucesso.`)
})

export default router_fornecedores;
