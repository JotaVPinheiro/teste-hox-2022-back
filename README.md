# teste-hox-2022-back

## Como rodar o projeto

### Passo 1: Criar o arquivo do banco de dados (SQLite)
No diretório raiz do projeto crie um diretório chamado `tmp`, e dentro dele um arquivo `sqlite.db`.

### Passo 2: Instalar as dependências

```
npm install
```

### Passo 3: Rodar as migrações do banco de dados

```
npx knex migrate:latest
```

### Passo 4: Rodar os seeds do banco de dados

```
npx knex seed:run
```

### Passo 5: Rodar a aplicação

```
npm run dev
```

## Rotas da aplicação

### Login

GET `/login/` : Retorn um objeto com um JWT.

Exemplo de body:
```json
{
	"login": "admin@hox.rs",
	"password": "admin"
}
```

### Produtos

GET `/products/` : Retorna todos os produtos cadastrados.

GET `/products/:id/` : Retorna o produto com o id especificado.

POST `/products/` : Cadastra um novo produto.

Exemplo de body:
```json
{
	"name": "Toddynho",
	"manufacturedDate": "2022-06-26",
	"perishable": true,
	"expirationDate": "2022-12-26",
	"price": 2
}
```

PUT `/products/:id/` : Edita o produto com o id especificado.

Exemplo de body:
```json
{
	"name": "Nescau",
	"price": 2.2
}
```

DELETE `/products/:id/` : Deleta o produto com o id especificado.

## Credenciais de login
```json
{
	"login": "admin@hox.rs",
	"password": "admin"
}
```

## Autentificação
Para acessar as rotas de CRUD dos produtos, adicione, ao header de cada requisição, um `X-Access-Token` com o JWT retornado na rota de login.
