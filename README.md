# teste-hox-2022-back

## Como rodar o projeto

### Passo 1: Criar o arquivo do banco de dados (SQLite)
No diretório raiz do projeto crie um diretório chamado ```tmp```, e dentro dele um arquivo ```sqlite.db```.

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

## Credenciais de login
```json
{
	"login": "admin@hox.rs",
	"password": "admin"
}
```

## Rotas da aplicação

### Login

GET ```/login/``` : Retorn um objeto com um JWT.<br>

### Produtos

GET <code>/products/</code> : Retorna todos os produtos cadastrados.

GET <code>/products/:id/</code> : Retorna o produto com o id especificado.

POST <code>/products/</code> : Cadastra um novo produto.
  
PUT <code>/products/:id/</code> : Edita o produto com o id especificado.

DELETE <code>/products/:id/</code> : Deleta o produto com o id especificado.
