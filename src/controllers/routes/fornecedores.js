import express from "express";
import criarTabelaFornecedores, { exibirFornecedores, exibirFornecedor, inserirFornecedores, deletarFornecedores, editarFornecedores} from '../../DAO/fornecedores.js'
import fornecedor from "../../model/modelFornecedores.js";

criarTabelaFornecedores()
const router_Fornecedores = express.Router();

//Listar todos os usuários 
router_Fornecedores.get('/', (req,res)=>{
    exibirFornecedores((response)=>{
        res.json(response)
    })
})

//Buscar usuários por ID
router_Fornecedores.get('/id/:id', (req,res)=>{
    const id = req.params.id
    exibirFornecedor(id, response=>{
        if(response.length===0) res.send(`Id "${id}" não encontrado no banco de dados`)
        else res.json(response)
    })
})

//Inserir novo usuário
router_Fornecedores.post('/add', (req,res)=>{
    const body = req.body;
    const newFornecedores = new fornecedor(
        body.nome,
        body.cnpj, 
        body.endereco, 
        body.conta_bancaria
    )

    inserirFornecedores(newFornecedores, response=>{
        res.send(`Fornecedor ${newFornecedores.nome} ${newFornecedores.sobrenome} adicionado com sucesso.`)
    })
})

//Apagar usuário por ID
router_Fornecedores.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    deletarFornecedores(id, response=>{
        res.send(`Id "${id}" removido do banco de dados.`)
    })
})

//Modificar propriedades de um usuário por seu ID
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

        editarFornecedores(id, newFornecedor, response=>{       
            res.send(`Id "${id}" atualizado.\n\n ${JSON.stringify(newFornecedor, null, 2)}` )
        })
    })
})

export default router_Fornecedores