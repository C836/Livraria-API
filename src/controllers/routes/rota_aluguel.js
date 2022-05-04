import express from "express";
import aluguel  from '../../models/modelsaluguel.js'
import criarTabelaAluguel, { inserirAluguel, exibirAlugueis, exibirAluguel, deletarAluguel, editarAluguel} from '../../DAO/aluguel.js'

criarTabelaAluguel()
console.log ("OI")
const router_aluguel = express.Router();

//Listar todos os usuários 
router_aluguel.get('/', (req,res)=>{
    exibirAlugueis((response)=>{
        res.json(response)
    })
})

//Buscar usuários por ID
router_aluguel.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirAluguel(id, response=>{
        if(response.length===0) res.send(`Id "${id}" não encontrado no banco de dados`)
        else res.json(response)
    })
})

//Inserir novo usuário
router_aluguel.post('/add', (req,res)=>{
    const body = req.body;
    const newAluguel = new aluguel(
        body.livro, 
        body.nome, 
        body.data_de_aluguel, 
        body.forma_de_pagamento, 
        body.data_de_entrega,
    )

    inserirAluguel(newAluguel, response=>{
        res.send(`Cliente ${newAluguel.livro} ${newAluguel.nome} adicionado com sucesso.`)
    })
})

//Apagar usuário por ID
router_aluguel.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarAluguel(id, response=>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

//Modificar propriedades de um usuário por seu ID
router_aluguel.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    exibirAluguel(id, oldAluguel=>{
        const newAluguel = new aluguel(
            body.livro!==undefined? body.livro : oldAluguel[0].livro, 
            body.nome!==undefined? body.nome : oldAluguel[0].nome, 
            body.data_de_aluguel!==undefined? body.data_de_aluguel : oldAluguel[0].data_de_aluguel, 
            body.forma_de_pagamento!==undefined? body.forma_de_pagamento : oldAluguel[0].forma_de_pagamento, 
            body.data_de_entrega!==undefined? body.data_de_entrega : oldAluguel[0].data_de_entrega,
        )

        editarAluguel(id, newAluguel, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newAluguel, null, 2)}` )
        })
    })
})

export default router_aluguel