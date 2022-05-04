import express from "express";
import funcionario from '../../models/model_funcionarios.js'
import criarTabelaFuncionarios, {exibirFuncionarios, exibirFuncionario, inserirFuncionario, deletarFuncionario, editarFuncionario } from '../../DAO/funcionarios.js'

criarTabelaFuncionarios()
const router_funcionarios = express.Router();

//Listar todos os funcionarios
router_funcionarios.get('/', (req,res)=>{
    exibirFuncionarios((response) => (res.send(response)));
})

//Buscar funcionario por ID
router_funcionarios.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirFuncionario(id, response => {
        if(response.length == 0){
            res.send("id não encontrado")
        } else {
            res.send(response)
        }
    })
})

//Inserir novo funcionário
router_funcionarios.post('/add', (req,res)=>{
    const body = req.body
    const newFuncionario = new funcionario(body.nome, body.sobrenome, body.data_nascimento, body.data_admissao, body.telefone, body.email, body.funcao)

    inserirFuncionario(newFuncionario, response => {res.send(`Funcionário ${newFuncionario.nome} adicionado`)})
})

//Modificar propriedades de um funcionário por seu ID
router_funcionarios.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    exibirFuncionario(id, oldFuncionario=>{
        const newFuncionario = new funcionario(
            body.nome!==undefined? body.nome : oldFuncionario[0].nome, 
            body.sobrenome!==undefined? body.sobrenome : oldFuncionario[0].sobrenome, 
            body.data_nascimento!==undefined? body.data_nascimento : oldFuncionario[0].data_nascimento, 
            body.data_admissao!==undefined? body.data_admissao : oldFuncionario[0].data_admissao, 
            body.telefone!==undefined? body.telefone : oldFuncionario[0].telefone,
            body.email!==undefined? body.email : oldFuncionario[0].email,
            body.funcao!==undefined? body.funcao : oldFuncionario[0].funcao,
        )

        editarFuncionario(id, newFuncionario, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newFuncionario, null, 2)}` )
        })
    })
})

//Apagar funcionário por ID
router_funcionarios.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarFuncionario(id, response =>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

export default router_funcionarios
