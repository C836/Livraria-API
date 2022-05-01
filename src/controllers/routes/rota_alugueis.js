import express from "express";
import aluguel  from '../../models/model_alugueis.js'
import criarTabelaAlugueis, { exibirAlugueis, exibirAluguel, inserirAluguel, deletarAluguel, editarAluguel} from '../../DAO/alugueis.js'

criarTabelaAlugueis()
const router_alugueis = express.Router();

//Listar registros
router_alugueis.get('/', (req,res)=>{
    exibirAlugueis((response)=>{
        res.json(response)
    })
})

//Buscar registro por id
router_alugueis.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirAluguel(id, response=>{
        if(response.length===0) res.send(`Id "${id}" não encontrado no banco de dados`)
        else res.json(response)
    })
})

//Inserir novo registro
router_alugueis.post('/add', (req,res)=>{
    const body = req.body;
    const newAluguel = new aluguel(
        body.livro, 
        body.nome, 
        body.sobrenome,
        body.data_de_aluguel, 
        body.forma_de_pagamento, 
        body.data_de_entrega,
    )

    inserirAluguel(newAluguel, response=>{
        res.send(`Aluguel do livro "${newAluguel.livro}" computado ao nome de: "${newAluguel.nome} ${newAluguel.sobrenome}".`)
    })
})

//Apagar registro por ID
router_alugueis.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarAluguel(id, response=>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

//Modificar propriedades de um registro por seu ID
router_alugueis.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    exibirAluguel(id, oldAluguel=>{
        const newAluguel = new aluguel(
            body.livro!==undefined? body.livro : oldAluguel[0].livro, 
            body.nome!==undefined? body.nome : oldAluguel[0].nome, 
            body.sobrenome!==undefined? body.sobrenome : oldAluguel[0].sobrenome, 
            body.data_de_aluguel!==undefined? body.data_de_aluguel : oldAluguel[0].data_de_aluguel, 
            body.forma_de_pagamento!==undefined? body.forma_de_pagamento : oldAluguel[0].forma_de_pagamento, 
            body.data_de_entrega!==undefined? body.data_de_entrega : oldAluguel[0].data_de_entrega,
        )

        console.log(newAluguel, oldAluguel)

        editarAluguel(id, newAluguel, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newAluguel, null, 2)}` )
        })
    })
})

export default router_alugueis