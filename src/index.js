import express from 'express'
import bodyParser from 'body-parser'

import router_clientes from './controllers/routes/clientes.js';

const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});

app.use('/clientes', router_clientes)