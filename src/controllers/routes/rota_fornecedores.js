import express from "express";
import fornecedor from "../../models/model_fornecedores.js";
import criarTabelaFornecedores, { exibirFornecedores, exibirFornecedor, inserirFornecedor, deletarFornecedor, editarFornecedor} from '../../DAO/fornecedores.js'

criarTabelaFornecedores()
const router_Fornecedores = express.Router();

//Listar todos os fornecedores 
router_Fornecedores.get('/', (req,res)=>{
    exibirFornecedores((response)=>{
        res.json(response)
    })
})

//Buscar fornecedores por ID
router_Fornecedores.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirFornecedor(id, response=>{
        if(response.length===0) res.send(`Id "${id}" não encontrado no banco de dados`)
        else res.json(response)
    })
})

//Inserir novo fornecedor
router_Fornecedores.post('/add', (req,res)=>{
    const body = req.body;
    const newFornecedores = new fornecedor(
        body.nome,
        body.cnpj, 
        body.endereco, 
        body.conta_bancaria
    )

    inserirFornecedor(newFornecedores, response=>{
        res.send(`Fornecedor ${newFornecedores.nome} ${newFornecedores.sobrenome} adicionado com sucesso.`)
    })
})

//Apagar fornecedor por ID
router_Fornecedores.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarFornecedor(id, response=>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

//Modificar propriedades de um fornecedor por seu ID
router_Fornecedores.patch('/update/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    exibirFornecedor(id, oldFornecedor=>{
        const newFornecedor = new fornecedor(
            body.nome!==undefined? body.nome : oldFornecedor[0].nome, 
            body.cnpj!==undefined? body.cnpj : oldFornecedor[0].cnpj, 
            body.endereco!==undefined? body.endereco : oldFornecedor[0].endereco, 
            body.conta_bancaria!==undefined? body.conta_bancaria : oldFornecedor[0].conta_bancaria,
        )

        editarFornecedor(id, newFornecedor, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newFornecedor, null, 2)}` )
        })
    })
})

export default router_Fornecedores