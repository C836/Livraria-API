<h1>Livraria API</h1>
Sistema de registro de clientes seguindo o padrão API Rest.

<h2>Inicialização</h2>
Em um terminal de sua escolha (powershell, cmd etc...), digite os seguintes comandos para instalar e inicializar a aplicação;
</p>
```sh
# selecionar diretório para a instalação
> cd [caminho do arquivo]

# instalar as dependências do projeto
> npm install

# iniciar aplicação
> npm start
```
</p>
Após isso, utilize uma plataforma de consultas de API's e faça a requisição de acordo as rotas disponíveis na sessão abaixo.
</code></pre>

<h3>Rotas</h3>

<!-- LIVROS--->

<details>
<summary>
<span style=font-size:18px;color:white;>
    <b>Livros</b>
</span>
</summary>

<ul>
<li><p>Listar todos os livros: <b>http://localhost:3000/livros</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "livros": [
        {
            "id": 1,
            "nome": "André",
            "sobrenome": "Silva",
            "cpf": 31673948030
            "email": "AndréBac4no9@gmail.com",
            "telefone": 9836447972
        },
        {
            "id": 2,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 32648918086
            "email": "Joao99Carlos99@gmail.com",
            "telefone": 6627644471
        },
        {
            "id": 3,
            "nome": "Maria",
            "sobrenome": "Brito",
            "cpf": 09325858096
            "email": "mariaaAAA20@gmail.com",
            "telefone": 6698645272
        }
    ]
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|1|André|Silva|31673948030|AndréBac4no9@gmail<span>.com</span>|9836447972
|2|João|Carlos|32648918086|Joao99Carlos99@gmail<span>.com</span>|6627644471
|3|Maria|Brito|09325858096|mariaaAAA20@gmail<span>.com</span>|6698645272

</li>

---

<li><p>Listar cliente por ID: <b>http://localhost:3000/livros/id/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "livros": [
        {
            "id": 2,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 32648918086
            "email": "Joao99Carlos99@gmail.com",
            "telefone": 6627644471
        }
    ]
}
</pre></code>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|2|João|Carlos|32648918086|Joao99Carlos99@gmail<span>.com</span>|6627644471

</li>

---

<li>
<p>Inserir cliente: <b>http://localhost:3000/livros/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "Lucas",
    "sobrenome": "Almeida",
    "cpf": 41320808034
    "email": "profLucasAl@gmail.com",
    "telefone": 8327378874
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|4|Lucas|Almeida|41320808034|profLucasAl@gmail<span>.com</span>|8327378874


> Cliente "Lucas Almeida" adicionado com sucesso.

</li>

---

<li>
<p>Apagar cliente por id: <b>http://localhost:3000/livros/delete/2</b></p>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|<del>2|<del>João|<del>Carlos|<del>32648918086|<del>Joao99Carlos99@gmail<span>.com</span>|<del>6627644471

> "Id "2" removido do banco de dados."

</li>

---

<li>
<p>Atualizar usuário por id: <b>http://localhost:3000/livros/update/1</b></p>
<details>
<pre><code>
{
    "sobrenome": "Silveira",
    "email": "AndréSilveira@gmail.com",
}
</code></pre>
<summary>Modelo JSON</summary>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|1|André|<b>Silveira</b>|31673948030|<b>AndréSilveira@gmail<span>.com</span></b>|9836447972

> Id "1" atualizado.
</li>
</details>

<!-- CLIENTES--->
<details>
<summary>
<span style=font-size:18px;color:white;>
    <b>Clientes</b>
</span>
</summary>

<ul>
<li><p>Listar todos os clientes: <b>http://localhost:3000/clientes</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "clientes": [
        {
            "id": 1,
            "nome": "André",
            "sobrenome": "Silva",
            "cpf": 31673948030
            "email": "AndréBac4no9@gmail.com",
            "telefone": 9836447972
        },
        {
            "id": 2,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 32648918086
            "email": "Joao99Carlos99@gmail.com",
            "telefone": 6627644471
        },
        {
            "id": 3,
            "nome": "Maria",
            "sobrenome": "Brito",
            "cpf": 09325858096
            "email": "mariaaAAA20@gmail.com",
            "telefone": 6698645272
        }
    ]
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|1|André|Silva|31673948030|AndréBac4no9@gmail<span>.com</span>|9836447972
|2|João|Carlos|32648918086|Joao99Carlos99@gmail<span>.com</span>|6627644471
|3|Maria|Brito|09325858096|mariaaAAA20@gmail<span>.com</span>|6698645272

</li>

---

<li><p>Listar cliente por ID: <b>http://localhost:3000/clientes/id/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "clientes": [
        {
            "id": 2,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 32648918086
            "email": "Joao99Carlos99@gmail.com",
            "telefone": 6627644471
        }
    ]
}
</pre></code>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|2|João|Carlos|32648918086|Joao99Carlos99@gmail<span>.com</span>|6627644471

</li>

---

<li>
<p>Inserir cliente: <b>http://localhost:3000/clientes/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "Lucas",
    "sobrenome": "Almeida",
    "cpf": 41320808034
    "email": "profLucasAl@gmail.com",
    "telefone": 8327378874
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|4|Lucas|Almeida|41320808034|profLucasAl@gmail<span>.com</span>|8327378874


> Cliente "Lucas Almeida" adicionado com sucesso.

</li>

---

<li>
<p>Apagar cliente por id: <b>http://localhost:3000/clientes/delete/2</b></p>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|<del>2|<del>João|<del>Carlos|<del>32648918086|<del>Joao99Carlos99@gmail<span>.com</span>|<del>6627644471

> "Id "2" removido do banco de dados."

</li>

---

<li>
<p>Atualizar usuário por id: <b>http://localhost:3000/clientes/update/1</b></p>
<details>
<pre><code>
{
    "sobrenome": "Silveira",
    "email": "AndréSilveira@gmail.com",
}
</code></pre>
<summary>Modelo JSON</summary>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|1|André|<b>Silveira</b>|31673948030|<b>AndréSilveira@gmail<span>.com</span></b>|9836447972

> Id "1" atualizado.
</li>
</details>

<details>
<summary>
<span style=font-size:18px;color:white>
    <b>Funcionários</b>
</span>
</summary>
<ul>
<li><p>Listar todos os funcionarios: <b>http://localhost:3000/funcionarios</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Funcionarios": [
        {
            "id": 1,
            "nome": "Lucas",
            "sobrenome": "Silva",
            "data_de_nascimento": 27/06/2000,
            "data_de_admissao": 23/04/2020,
            "telefone": 9836447972,
            "email": "lucasBac4no9@gmail.com",
            "funcao": "Auxiliar Administrativo"
            
        }
        {
            "id": 2,
            "nome": "Fernanda",
            "sobrenome": "Oliveira",
            "data_de_nascimento": 04/04/1996,
            "data_de_admissao": 19/02/2018,
            "telefone": 996455432,
            "email": "fernanda_oliveira@gmail.com",
            "funcao": "Secretária"
        }
        {
            "id": 3,
            "nome": "Maria Luiza",
            "sobrenome": "Alcântara",
            "data_de_nascimento": 15/05/1980,
            "data_de_admissao": 19/03/2002,
            "telefone": 995478938,
            "email": "mariaLu1980@gmail.com",
            "funcao": "Gerente"
        }
    ]
}
</code></pre>
</details>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|1|Lucas|Silva|27/06/2000|23/04/2020|9836447972|lucasBac4no9@gmail<span>.com</span>|Auxiliar Administrativo
|2|Fernanda|Oliveira|04/04/1996|19/02/2018|996455432|fernanda_oliveira@<span>.com</span>|Secretária
|3|Maria Luiza|Alcântara|15/05/1980|19/03/2002|995478938|mariaLu1980@gmail<span>.com</span>|Gerente

</li>

---

<li><p>Listar funcionario por ID: <b>http://localhost:3000/funcionarios/id/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Funcionario": [
        {
            "id": 2,
            "nome": "Fernanda",
            "sobrenome": "Oliveira",
            "data_de_nascimento": 04/04/1996,
            "data_de_admissao": 19/02/2018,
            "telefone": 996455432,
            "email": "fernanda_oliveira@gmail.com",
            "funcao": "Secretária"
        }
    ]
}
</pre></code>
</details>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|2|Fernanda|Oliveira|04/04/1996|19/02/2018|996455432|fernanda_oliveira@<span>.com</span>|Secretária

</li>

---

<li>
<p>Inserir funcionario: <b>http://localhost:3000/funcionarios/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "Maria Luiza",
    "sobrenome": "Alcântara",
    "data_de_nascimento": 15/05/1980,
    "data_de_admissao": 19/03/2002,
    "telefone": 995478938,
    "email": "mariaLu1980@gmail.com",
    "funcao": "Gerente"
}

</code></pre>
</details>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|3|Maria Luiza|Alcântara|15/05/1980|19/03/2002|995478938|mariaLu1980@gmail<span>.com</span>|Gerente

> Funcionario "Maria Luiza Alcântara" adicionado com sucesso.

</li>

---

<li>
<p>Apagar funcionario por id: <b>http://localhost:3000/funcionarios/delete/1</b></p>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|<del>1|<del>Lucas|<del>Silva|<del>27/06/2000|<del>23/04/2020|<del>9836447972|<del>lucasBac4no9@gmail<span>.com</span>|<del>Auxiliar Administrativo

> "Id "1" removido do banco de dados."

</li>

---

<li>
<p>Atualizar funcionario por id: <b>http://localhost:3000/funcionarios/update/1</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "sobrenome": "Silva",
    "email": "lucasSilva20@gmail.com",
}
</code></pre>
</details>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|1|Lucas|<b>Silva</b>|27/06/2000|23/04/2020|9836447972|<b>lucasSilva20@gmail<span>.com</span></b>|<b>Auxiliar Administrativo</b>

> Id "1" atualizado.
</li>
</details>

<details>
<summary>
<span style=font-size:18px;color:white>
    <b>Fornecedores</b>
</span>
</summary>
<ul>
<li><p>Listar todos os fornecedores: <b>http://localhost:3000/fornecedores</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Fornecedores": [
        {
            "id": 1,
            "nome": "Carlos Francisco",
            "cnpj": 02.234.456/0001-89,
            "endereco":"Rua Jacaré, 345, Vila Velha - BH/MG",
            "contaBancaria":"Ag: 1234, Cc:12345-7"
        }       
        {
            "id": 2,
            "nome": "João Antônio",
            "cnpj": 01.234.546/0002-78,
            "endereco":"Rua Sabino, 27, Santa Cruz - Go/GO",
            "contaBancaria":"Ag: 4321, Cc:76549-0"
        }
        {
            "id": 3,
            "nome": "Ana Vasconcelos",
            "cnpj": 03.567.031/0003-69,
            "endereco":"Avenida Floris, Cerejeira - Sc/PA",
            "contaBancaria":"Ag: 7654, Cc:24567-3"
        }
    ]   
}        

</code></pre>
</details>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|1|Carlos Francisco|02.234.456/0001-89|Rua Jacaré, 345, Vila Velha - BH/MG|Ag: 1234, Cc:12345-7
|2|João Antônio|01.234.546/0002-78|Rua Sabino, 27, Santa Cruz - Go/GO|Ag: 4321, Cc:76549-0
|3|Ana Vasconcelos|03.567.031/0003-69|Avenida Floris, Cerejeira - Sc/PA|Ag: 7654, Cc:24567-3

</li>

---

<li><p>Listar fornecedor por ID: <b>http://localhost:3000/fornecedores/id/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Funcionario": [
        {
            "id": 2,
            "nome": "João Antônio",
            "cnpj": 01.234.546/0002-78,
            "endereco":"Rua Sabino, 27, Santa Cruz - Go/GO",
            "contaBancaria":"Ag: 4321, Cc:76549-0"
        }
    ]
}
</pre></code>
</details>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|2|João Antônio|01.234.546/0002-78|Rua Sabino, 27, Santa Cruz - Go/GO|Ag: 4321, Cc:76549-0

</li>

---

<li>
<p>Inserir fornecedor: <b>http://localhost:3000/fornecedores/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "Ana Vasconcelos",
    "cnpj": 03.567.031/0003-69,
    "endereco":"Avenida Floris, Cerejeira - Sc/PA",
    "contaBancaria":"Ag: 7654, Cc:24567-3"
}

</code></pre>
</details>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|3|Ana Vasconcelos|03.567.031/0003-69|Avenida Floris, Cerejeira - Sc/PA|Ag: 7654, Cc:24567-3

> Funcionario "Ana Vasconcelos" adicionado com sucesso.

</li>

---

<li>
<p>Apagar fornecedor por id: <b>http://localhost:3000/fornecedores/delete/1</b></p>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|<del>1|<del>Carlos Francisco|<del>02.234.456/0001-89|<del>Rua Jacaré, 345, Vila Velha - BH/MG|<del>Ag: 1234, Cc:12345-7

> "Id "1" removido do banco de dados."

</li>

---

<li>
<p>Atualizar fornecedor por id: <b>http://localhost:3000/fornecedores/update/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "João Antônio",
    "endereco": "Rua Felislândia, 46, Félix, Go/GO",

}

</code></pre>
</details>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|2|<b>Joao Antônio</b>|01.234.546/0002-78|<b>Rua Felislândia, 46, Félix, Go/GO</b>|<b>Ag: 4321, Cc:76549-0</b>

> Id "2" atualizado.

</li>
</details>

<!-- ALUGUEIS--->

<h2>Equipe</h2>

<ul>
<li><h4>Gabriel Lopes<h4></li>
🔗 <a target="_blank" href="https://github.com/C836" >Github </a> 
🔗 <a target="_blank" href="https://www.linkedin.com/in/gabriel-lopes8/">Linkedin </a>
</p>
<li><h4>Jessica Santos</h4></li>
🔗 <a target="_blank" href="https://github.com/Jessaint">Github </a>
🔗 <a target="_blank" href="https://www.linkedin.com/in/jessicasjesus/">Linkedin </a>
</p>
<li><h4>Madalena Brito</h4></li>
🔗 <a target="_blank" href="https://github.com/Mada-k">Github </a>
🔗 <a target="_blank" href="https://www.linkedin.com/in/madalenabrito/">Linkedin </a>
</p>
<li><h4>Rafael Henrique</h4></li>
🔗 <a target="_blank" href="https://github.com/rhenriique">Github </a>
🔗 <a target="_blank" href="https://www.linkedin.com/in/rafael-henrique-santos-b96a32216/">Linkedin </a>
</p>
<li><h4>Tiago Medeiros</h4></li>
🔗 <a target="_blank" href="https://github.com/tiagocpmedeiros">Github </a>
🔗 <a target="_blank" href="https://www.linkedin.com/in/tiagocpmedeiros/">Linkedin </a>
</ul>