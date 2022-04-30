import express from 'express'
import bodyParser from 'body-parser'

import router_aluguel from './controllers/routes/rota_aluguel.js';

const PORT = process.env.PORT||8000
const app = express();

app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta " + PORT);
});

app.use('/aluguel', router_aluguel)