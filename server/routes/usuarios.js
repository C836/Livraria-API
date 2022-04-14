import express from "express";
const router = express.Router();

const users = [{
    nome: "Gabriel",
    sobrenome: "Lopes",
    idade: 25,
    email: "gl.sepiol@gmail.com",
    telefone: "21985264873",
    funcao: "Digitador profissional"
}]

router.get('/', (req,res)=>{
    res.send(users)
})

router.post('/add', (req,res)=>{
    const newUser = req.body
    users.push(newUser)
    res.send(`Usuário ${newUser.nome} ${newUser.sobrenome} adicionado com sucesso.`)
})

export default router