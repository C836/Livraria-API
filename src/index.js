import express from 'express'
import bodyParser from 'body-parser'
import router from './controllers/routes/routes.js'
import router_funcionarios from './controllers/routes/funcionarios.js';

const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});

app.use('/clientes', router)
app.use('/funcionarios', router_funcionarios)