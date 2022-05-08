import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';
import cors from 'cors'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import router_livros from './controllers/routes/rota_livros.js';
import router_clientes from './controllers/routes/rota_clientes.js';
import router_alugueis from './controllers/routes/rota_alugueis.js';
import router_funcionarios from './controllers/routes/rota_funcionarios.js';
import router_fornecedores from './controllers/routes/rota_fornecedores.js';

const PORT = process.env.PORT||3000
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta " + PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.use('/livros', router_livros)
app.use('/clientes', router_clientes)
app.use('/alugueis', router_alugueis)
app.use('/funcionarios', router_funcionarios)
app.use('/fornecedores', router_fornecedores)