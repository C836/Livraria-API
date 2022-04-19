# Registro-de-Usuarios-API
Sistema de registro de usuários seguindo o padrão API Rest.

# Rotas
<h3>Usuários</h3>
<ul>
<li><p>Listar todos os usuários: <b>http://localhost:3000/users</b></p>

```
{
    "usuarios": [
        {
            "id": 0,
            "nome": "Lucas",
            "sobrenome": "Silva",
            "email": "LucasS88@gmail.com",
            "senha": "98cachorrinho98"
        }
    ]
}
```

</li>

<li><p>Listar usuário por ID: <b>http://localhost:3000/users/id/6</b></p>

```
{
    "usuarios": [
        {
            "id": 6,
            "nome": "João",
            "sobrenome": "Carlos",
            "email": "Joooooao48@gmail.com",
            "senha": "s3nh4b0a!"
        }
    ]
}
```

</li>

<li>
<p>Inserir usuário: <b>http://localhost:3000/users/add</b></p>

```
{
    "nome": "Lucas",
    "sobrenome": "Silva",
    "email": "LucasS88@gmail.com",
    "senha": "98cachorrinho98"
}

> Usuário Lucas Silva adicionado com sucesso.
```
</li>

<li>
<p>Apagar usuário por id: <b>http://localhost:3000/users/delete/2</b></p>

```
{
    "id": 2
    "nome": "Lucas",
    "sobrenome": "Silva",
    "email": "LucasS88@gmail.com",
    "senha": "98cachorrinho98"
}

> "Id "2" removido do banco de dados."
```
</li>

<li>
<p>Atualizar usuário por id: <b>http://localhost:3000/users/update/3</b></p>

```
{
    "sobrenome": "Silveira",
    "email": "LucasSilveira@gmail.com",
}

> Id "3" atualizado.
```
</li>