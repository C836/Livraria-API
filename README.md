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
            "sobrenome": "Britto",
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
|2|Maria|Britto|09325858096|mariaaAAA20@gmail<span>.com</span>|6627644471

</li>
---
<li><p>Listar cliente por ID: <b>http://localhost:3000/clientes/id/1</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>

```
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
```
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

```
{
    "nome": "Maria",
    "sobrenome": "Britto",
    "cpf": 09325858096
    "email": "mariaaAAA20@gmail.com",
    "telefone": 6627644471
}
```
</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|2|Maria|Britto|09325858096|mariaaAAA20@gmail<span>.com</span>|6627644471


> Cliente "Maria Britto" adicionado com sucesso.

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

```
{
    "sobrenome": "Silveira",
    "email": "LucasSilveira@gmail.com",
}
```

</code></pre>
</details>

|id|nome|sobrenome|cpf|email|telefone|
|---|---|---|---|---|---|
|0|Lucas|<b>Silveira</b>|31673948030|<b>LucasSilveira415@gmail<span>.com</span></b>|9836447972

> Id "1" atualizado.
</li>
</details>