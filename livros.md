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
	        "isbn": "8535930043",
            "titulo": "Guerra e Paz",
            "autor": "Liev Tolstoi",
            "lingua": Pt-br,
            "editora": "Companhia das Letras",
            "paginas": 1544,
            "publicacao": "21/11/2017",
            "preco": "137,90",
            "genero": "Ficção Literária",
            "quantidade": 300
        },

 	    {
            "id": 2,
	        "isbn": "8575226932",
            "titulo": "Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript",
            "autor": "Loiane Groner",
            "lingua": Pt-br,
            "editora": "Novatec Editora ",
            "paginas": 408,
            "publicacao": "11/03/2019",
            "preco": "64,94",
            "genero": "Programação de Computadores",
            "quantidade": 12
        },

        {
            "id": 3,
	        "isbn": "8575225405",
            "titulo": "Aprendendo Node: Usando JavaScript no Servidor",
            "autor": "Shelley Powers",
            "lingua": Pt-br,
            "editora": "Novatec Editora ",
            "paginas": 312,
            "publicacao": "24/01/2017",
            "preco": "70,99",
            "genero": "Programação de Computadores",
            "quantidade": 29
        },
    ]
}
</code></pre>
</details>


|id|isbn|titulo|autor|lingua|editora|paginas|publicacao|preco|genero|quantidade

|---|---|---|---|---|---|

|1|8535930043|Guerra e Paz|Liev Tolstoi|Pt-br|Companhia das Letras|1544|21/11/2017|137,90|Ficção Literária|300

|2|8575226932|Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Xomplexo e Eficaz Usando a Mais Recente|Loiane Groner|Pt-br|Novatec Editora|408|11/03/2019|64,90|Programação de Computadores|12

|3|8575226932|Aprendendo Node: Usando JavaScript no Servidor|Shelley Powers|Pt-br|Novatec Editora|312|24/01/2017|70,99|Programação de Computadores|29

</li>

---

<li><p>Listar livros por ID: <b>http://localhost:3000/livros/id/2</b></p>
<details>

<summary>Modelo JSON</summary>
<pre><code>
{
    "livros": [
        {
           "id": 2,
	        "isbn": "8575226932",
            "titulo": "Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript",
            "autor": "Loiane Groner",
            "lingua": Pt-br
            "editora": "Novatec Editora ",
            "paginas": 408,
            "publicacao": "11/03/2019",
            "preco": "64,94",
            "genero": "Programação de Computadores"
            "quantidade": 12
        }
    ]
}
</pre></code>
</details>

|id|isbn|titulo|autor|lingua|editora|paginas|publicacao|preco|genero|quantidade

|---|---|---|---|---|---|

2|8575226932|Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Xomplexo e Eficaz Usando a Mais Recente|Loiane Groner|Pt-br|Novatec Editora|408|11/03/2019|64,90|Programação de Computadores|12

</li>

---

<li>
<p>Inserir livros: <b>http://localhost:3000/livros/add</b></p>
<details>
<summary>Modelo JSON</summary>
<pre><code>
{
            "id": 4,
	        "isbn": "978-1449341398",
            "titulo": "Heroku: Up and Running: Effortless Application Deployment and Scaling",
            "autor": "Neil Middleton & Richard Schneeman",
            "lingua": Eng,
            "editora": "O'Reilly Media",
            "paginas": 125,
            "publicacao": "07/11/2013",
            "preco": "42,24",
            "genero": "Programação de Computadores",
            "quantidade": 4
}
</code></pre>

</details>

|id|isbn|titulo|autor|lingua|editora|paginas|publicacao|preco|genero|quantidade

|---|---|---|---|---|---|

|4|978-1449341398|Heroku: Up and Running: Effortless Application Deployment and Scaling|Neil Middleton & Richard Schneeman|Eng|O'Reilly Media|125|07/11/2013|42,24|Programação de Computadores|4


> Livro "Heroku: Up and Running: Effortless Application Deployment and Scaling" adicionado com sucesso.

</li>

---

<li>
<p>Apagar livros por id: <b>http://localhost:3000/livros/delete/2</b></p>

|id|isbn|titulo|autor|lingua|editora|paginas|publicacao|preco|genero|quantidade

|---|---|---|---|---|---|

|<del>2|<del>8575226932|<del>Estruturas de Dados e Algoritmos com  JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript|<del>Loiane Groner|<del>Pt-br|<del>Novatec Editora|<del>408|<del>11/03/2019|<del>64,90|<del>Programação de Computadores|<del>12

> "Id "2" removido do banco de dados."

</li>

---

<li>
<p>Atualizar usuário por id: <b>http://localhost:3000/livros/update/1</b></p>
<details>
<pre><code>
{
    "autor": "Tolstoi",
    "preco": "100",
}
</code></pre>
<summary>Modelo JSON</summary>
</details>

|id|isbn|titulo|autor|lingua|editora|paginas|publicacao|preco|genero|quantidade

|---|---|---|---|---|---|

|1|8535930043|Guerra e Paz|Tolstoi|Pt-br|Companhia das Letras|1544|21/11/2017|100|Ficção Literária|300
> Id "1" atualizado.
</li>
</details>