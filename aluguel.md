<!-- ALUGUEL--->
<details>
<summary>
<span style=font-size:18px;color:white;>
    <b>Aluguel</b>
</span>
</summary>

<ul>
<li><p>Listar todos os alugueis: <b>http://localhost:8000/aluguel</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "aluguel": [
        {
            "id": 1,
            "livro": "Guerra e Paz",
            "nome": "André",
            "data de aluguel":01/01/2022,
            "forma de pagamento": "cartão de crédito",
            "data de entrega": 25/01/2022,
        },
        {
            "id": 2,
            "livro": "Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript",
            "nome": "João",
            "data de aluguel": 01/02/2022,
            "forma de pagamento": "dinheiro",
            "data de entrega": 25/02/2022,
        },
        {
            "id": 3,
            "livro": "Aprendendo Node: Usando JavaScript no Servidor",
            "nome": "Maria",
            "data de aluguel": 01/03/2022,
            "forma de pagamento": "cartão de crédito",
            "data de entrega": 25/03/2022,
        }
    ]
}
</code></pre>
</details>

|id|livro|nome|data de aluguel|forma de pagamento|data de entrega|
|---|---|---|---|---|---|
|1|Guerra e Paz|André|01/01/2022|cartão de crédito|25/01/2022
|2|Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript|João|01/02/2022|dinheiro|25/02/2022
|3|Aprendendo Node: Usando JavaScript no Servidor|Maria|01/03/2022|cartão de crédito|25/03/2022

</li>

---

<li><p>Listar alugueis por ID: <b>http://localhost:8000/aluguel/id/2</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
    "aluguel": [
        {
            "id": 2,
            "livro": "Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript",
            "nome": "João",
            "data de aluguel": 01/02/2022,
            "forma de pagamento": "dinheiro",
            "data de entrega": 25/02/2022,
        }
    ]
}
</pre></code>
</details>

|id|livro|nome|data de aluguel|forma de pagamento|data de entrega|
|---|---|---|---|---|---|
|2|Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript|João|01/02/2022|dinheiro|25/02/2022

</li>

---

<li>
<p>Inserir aluguel: <b>http://localhost:8000/aluguel/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
            "id": 4,
            "livro": "Heroku: Up and Running: Effortless Application Deployment and Scaling",
            "nome": "Lucas",
            "data de aluguel": 01/04/2022,
            "forma de pagamento": "dinheiro",
            "data de entrega": 25/04/2022,
}
</code></pre>
</details>

|id|livro|nome|data de aluguel|forma de pagamento|data de entrega|
|---|---|---|---|---|---|
|4|Heroku: Up and Running: Effortless Application Deployment and Scaling|Lucas|01/04/2022|dinheiro|25/04/2022


> Aluguel de "Lucas" adicionado com sucesso.

</li>

---

<li>
<p>Apagar cliente por id: <b>http://localhost:8000/aluguel/delete/2</b></p>

|id|livro|nome|data de aluguel|forma de pagamento|data de entrega|
|---|---|---|---|---|---|
|<del>2|<del>Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript|<del>João|<del>01/02/2022|<del>dinheiro|<del>25/02/2022

> "Id "2" removido do banco de dados."

</li>

---

<li>
<p>Atualizar usuário por id: <b>http://localhost:8000/aluguel/update/1</b></p>
<details>
<pre><code>
{
    "nome": "Ivan",
    "livro": "Teoria da Moeda",
}
</code></pre>
<summary>Modelo JSON</summary>
</details>

|id|livro|nome|data de aluguel|forma de pagamento|data de entrega|
|---|---|---|---|---|---|
|1|Guerra e Paz|<b>André Henrique</b>|01/01/2022|<b>cartão de débito</b>|25/01/2022

> Id "1" atualizado.
</li>
</details>