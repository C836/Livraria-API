import express from 'express'
import bodyParser from 'body-parser'

import router_clientes from './controllers/routes/rota_clientes.js';

const PORT = process.env.PORT||3000
const app = express();

app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta " + PORT);
});

app.use('/clientes', router_clientes)