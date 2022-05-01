# Livraria API
Sistema de registro de clientes seguindo o padrão API Rest.

## Rotas
<details>
<summary>
<span style=font-size:20px;color:black>
    <b>Clientes</b>
</span>
</summary>

<ul>
<li><p>Listar todos os clientes: <b>http://localhost:3000/clientes</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "usuarios": [
        {
            "id": 0,
            "nome": "Lucas",
            "sobrenome": "Silva",
            "cpf": 31673948030
            "email": "LucasBac4no9@gmail.com",
            "telefone": 9836447972
        }
        {
            "id": 1,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 32648918086
            "email": "Joao99Carlos99@gmail.com",
            "telefone": 6627644471
        }
        {
            "id": 2,
            "nome": "Maria",
            "sobrenome": "Brito",
            "cpf": 09325858096
            "email": "mariaaAAA20@gmail.com",
            "telefone": 6627644471
        }
    ]
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|0|Lucas|Silva|31673948030|LucasBac4no9@gmail<span>.com</span>|9836447972
|1|João|Carlos|32648918086|Joao99Carlos99@gmail<span>.com</span>|6627644471
|2|Maria|Brito|09325858096|mariaaAAA20@gmail<span>.com</span>|6627644471

</li>

---

<li><p>Listar cliente por ID: <b>http://localhost:3000/clientes/id/1</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "usuarios": [
        {
            "id": 1,
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
|1|Lucas|Silva|31673948030|LucasBac4no9@gmail<span>.com</span>|9836447972

</li>

---

<li>
<p>Inserir cliente: <b>http://localhost:3000/clientes/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "nome": "Maria",
    "sobrenome": "Brito",
    "cpf": 09325858096
    "email": "mariaaAAA20@gmail.com",
    "telefone": 6627644471
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|2|Maria|Brito|09325858096|mariaaAAA20@gmail<span>.com</span>|6627644471


> Cliente "Maria Brito" adicionado com sucesso.

</li>

---

<li>
<p>Apagar cliente por id: <b>http://localhost:3000/clientes/delete/1</b></p>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|<del>1|<del>João|<del>Carlos|<del>32648918086|<del>Joao99Carlos99@gmail<span>.com</span>|<del>6627644471

> "Id "1" removido do banco de dados."

</li>

---

<li>
<p>Atualizar cliente por id: <b>http://localhost:3000/clientes/update/0</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "sobrenome": "Silveira",
    "email": "LucasSilveira@gmail.com",
}
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|0|Lucas|<b>Silveira</b>|31673948030|<b>LucasSilveira415@gmail<span>.com</span></b>|9836447972

> Id "1" atualizado.
</li>
</details>

<details>
<summary>
<span style=font-size:20px;color:black>
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
            "id": 0,
            "nome": "Lucas",
            "sobrenome": "Silva",
            "data_de_nascimento": 27/06/2000,
            "data_de_admissao": 23/04/2020,
            "telefone": 9836447972,
            "email": "lucasBac4no9@gmail.com",
            "funcao": "Auxiliar Administrativo"
            
        }
        {
            "id": 1,
            "nome": "Fernanda",
            "sobrenome": "Oliveira",
            "data_de_nascimento": 04/04/1996,
            "data_de_admissao": 19/02/2018,
            "telefone": 996455432,
            "email": "fernanda_oliveira@gmail.com",
            "funcao": "Secretária"
        }
        {
            "id": 2,
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
|0|Lucas|Silva|27/06/2000|23/04/2020|9836447972|lucasBac4no9@gmail<span>.com</span>|Auxiliar Administrativo
|1|Fernanda|Oliveira|04/04/1996|19/02/2018|996455432|fernanda_oliveira@<span>.com</span>|Secretária
|2|Maria Luiza|Alcântara|15/05/1980|19/03/2002|995478938|mariaLu1980@gmail<span>.com</span>|Gerente

</li>

---

<li><p>Listar funcionario por ID: <b>http://localhost:3000/funcionarios/id/1</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Funcionario": [
        {
            "id": 1,
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
|1|Fernanda|Oliveira|04/04/1996|19/02/2018|996455432|fernanda_oliveira@<span>.com</span>|Secretária

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
|2|Maria Luiza|Alcântara|15/05/1980|19/03/2002|995478938|mariaLu1980@gmail<span>.com</span>|Gerente

> Funcionario "Maria Luiza Alcântara" adicionado com sucesso.

</li>

---

<li>
<p>Apagar funcionario por id: <b>http://localhost:3000/funcionarios/delete/0</b></p>

|id|nome|sobrenome|data_de_nascimento|data_de_admissao|telefone|email|funcao|
|---|---|---|---|---|---|---|---|
|<del>0|<del>Lucas|<del>Silva|<del>27/06/2000|<del>23/04/2020|<del>9836447972|<del>lucasBac4no9@gmail<span>.com</span>|<del>Auxiliar Administrativo

> "Id "0" removido do banco de dados."

</li>

---

<li>
<p>Atualizar funcionario por id: <b>http://localhost:3000/funcionarios/update/0</b></p>
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
|0|Lucas|<b>Silva</b>|27/06/2000|23/04/2020|9836447972|<b>lucasSilva20@gmail<span>.com</span></b>|<b>Auxiliar Administrativo</b>

> Id "0" atualizado.
</li>
</details>

<details>
<summary>
<span style=font-size:20px;color:black>
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
            "id": 0,
            "nome": "Carlos Francisco",
            "cnpj": 02.234.456/0001-89,
            "endereco":"Rua Jacaré, 345, Vila Velha - BH/MG",
            "contaBancaria":"Ag: 1234, Cc:12345-7"
        }       
        {
            "id": 1,
            "nome": "João Antônio",
            "cnpj": 01.234.546/0002-78,
            "endereco":"Rua Sabino, 27, Santa Cruz - Go/GO",
            "contaBancaria":"Ag: 4321, Cc:76549-0"
        }
        {
            "id": 2,
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
|0|Carlos Francisco|02.234.456/0001-89|Rua Jacaré, 345, Vila Velha - BH/MG|Ag: 1234, Cc:12345-7
|1|João Antônio|01.234.546/0002-78|Rua Sabino, 27, Santa Cruz - Go/GO|Ag: 4321, Cc:76549-0
|2|Ana Vasconcelos|03.567.031/0003-69|Avenida Floris, Cerejeira - Sc/PA|Ag: 7654, Cc:24567-3

</li>

---

<li><p>Listar fornecedor por ID: <b>http://localhost:3000/fornecedores/id/1</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "Funcionario": [
        {
            "id": 1,
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
|1|João Antônio|01.234.546/0002-78|Rua Sabino, 27, Santa Cruz - Go/GO|Ag: 4321, Cc:76549-0

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
|2|Ana Vasconcelos|03.567.031/0003-69|Avenida Floris, Cerejeira - Sc/PA|Ag: 7654, Cc:24567-3

> Funcionario "Ana Vasconcelos" adicionado com sucesso.

</li>

---

<li>
<p>Apagar fornecedor por id: <b>http://localhost:3000/fornecedores/delete/0</b></p>

|id|nome|cnpj|endereco|contaBancaria|
|---|---|---|---|---|
|<del>0|<del>Carlos Francisco|<del>02.234.456/0001-89|<del>Rua Jacaré, 345, Vila Velha - BH/MG|<del>Ag: 1234, Cc:12345-7

> "Id "0" removido do banco de dados."

</li>

---

<li>
<p>Atualizar fornecedor por id: <b>http://localhost:3000/fornecedores/update/1</b></p>
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
|0|<b>Joao Antônio</b>|01.234.546/0002-78|<b>Rua Felislândia, 46, Félix, Go/GO</b>|<b>Ag: 4321, Cc:76549-0</b>

> Id "0" atualizado.

</li>
</details>
