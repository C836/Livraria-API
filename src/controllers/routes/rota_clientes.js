import express from "express";
import cliente  from '../../models/model_clientes.js'
import criarTabelaClientes, { exibirClientes, exibirCliente, inserirCliente, deletarCliente, editarCliente} from '../../DAO/clientes.js'

criarTabelaClientes()
const router_clientes = express.Router();

//Listar todos os clientes 
router_clientes.get('/', (req,res)=>{
    exibirClientes((response)=>{
        res.json(response)
    })
})

//Buscar cliente por ID
router_clientes.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirCliente(id, response=>{
        if(response.length===0) res.send(`Id "${id}" não encontrado no banco de dados`)
        else res.json(response)
    })
})

//Inserir novo cliente
router_clientes.post('/add', (req,res)=>{
    const body = req.body;
    const newCliente = new cliente(
        body.nome, 
        body.sobrenome, 
        body.cpf, 
        body.email, 
        body.telefone
    )

    inserirCliente(newCliente, response=>{
        res.send(`Cliente ${newCliente.nome} ${newCliente.sobrenome} adicionado com sucesso.`)
    })
})

//Apagar cliente por ID
router_clientes.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarCliente(id, response=>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

//Modificar propriedades de um cliente por seu ID
router_clientes.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    exibirCliente(id, oldCliente=>{
        const newCliente = new cliente(
            body.nome!==undefined? body.nome : oldCliente[0].nome, 
            body.sobrenome!==undefined? body.sobrenome : oldCliente[0].sobrenome, 
            body.cpf!==undefined? body.cpf : oldCliente[0].cpf, 
            body.email!==undefined? body.email : oldCliente[0].email, 
            body.telefone!==undefined? body.telefone : oldCliente[0].telefone
        )

        editarCliente(id, newCliente, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newCliente, null, 2)}` )
        })
    })
})

export default router_clientes