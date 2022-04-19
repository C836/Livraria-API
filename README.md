# Registro-de-Usuarios-API
Sistema de registro de usuários seguindo o padrão API Rest.

# Rotas
<h3>Usuários</h3>
<ul>
<li><p>Listar todos os usuários: <b>http://localhost:3000/clientes</b></p>

```
{
    "clientes": [
        {
            "id": 0,
            "nome": "Lucas",
            "sobrenome": "Silva",
            "cpf": 12345678900
            "email": "LucasS88@gmail.com",
            "telefone": 12345678
        }
        {
            "id": 1,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 12345678900
            "email": "Joooooao48@gmail.com",
            "telefone": 12345678
        }
    ]
}
    ]
}
```

</li>

<li><p>Listar usuário por ID: <b>http://localhost:3000/clientes/id/1</b></p>

```
{
    "clientes": [
        {
            "id": 1,
            "nome": "João",
            "sobrenome": "Carlos",
            "cpf": 12345678900
            "email": "Joooooao48@gmail.com",
            "telefone": 12345678
        }
    ]
}
```

</li>

<li>
<p>Inserir usuário: <b>http://localhost:3000/clientes/add</b></p>

```
{
    "nome": "Lucas",
    "sobrenome": "Silva",
    "cpf": 12345678900
    "email": "LucasS88@gmail.com",
    "telefone": 12345678
}

> Usuário Lucas Silva adicionado com sucesso.
```
</li>

<li>
<p>Apagar usuário por id: <b>http://localhost:3000/clientes/delete/1</b></p>

```
{
    "id": 1,
    "nome": "João",
    "sobrenome": "Carlos",
    "cpf": 12345678900
    "email": "Joooooao48@gmail.com",
    "telefone": 12345678
}

> "Id "1" removido do banco de dados."
```
</li>

<li>
<p>Atualizar usuário por id: <b>http://localhost:3000/clientes/update/1</b></p>

```
{
    "sobrenome": "Silveira",
    "email": "LucasSilveira@gmail.com",
}

> Id "1" atualizado.
```
</li>
