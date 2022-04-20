import express from 'express'
import bodyParser from 'body-parser'
import router from './controllers/routes/routes.js';
import router_fornecedores from './controllers/routes/fornecedores.js';

const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});

app.use('/clientes', router)
app.use('/fornecedores', router_fornecedores)
