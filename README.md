# Desafio de cadastro de veículo

Um desafio onde devemos criar um ambiente utilizando NodeJS, Postgres e Docker e criar uma api que permitira cadastrar, buscar e editar os dados de um cadastro de veículo.

Conteúdo que deve ser desenvolvido.
- Obrigatório usar Dockercompose.yml;
- Criar e manter os dados usando "volumes" no docker;
- Usar Express;
- Conter as operações "GET, POST, PUT e DELETE";
- Buscar por Id do veículo;
- Conter uma tabela chamada "Carro";
- Conter os campos "Placa, Ano, Modelo, Ativo e Marca"



## Project setup
Leia com atenção todo o conteudo abaixo para que no final a API funcione.

Rode os comandos a seguir.

Caso você já esteja no diretório abaixo, pule para o comando ``npm install``.

```
cd .\backend-api\
```
```
npm install
```

### Docker Compose
```
docker-compose up
```

### Migrate

Abra um novo terminal e acesse a pasta backend-api do projeto para executar os passos a seguir.

Certifique-se de ter acessado a pasta "backend-api" ou rode o comando ```cd .\backend-api\``` no terminal.

Altere o campo "host" no arquivo "config.json" dentro da pasta "src/config" de "postgres_container" para "localhost", salve e execute os comandos a seguir para criar a tabela e preencher com alguns dados iniciais:

```
npx sequelize-cli db:migrate
```
```
npx sequelize-cli db:seed:all
```

Após isso, volte o campo "host" no arquivo "config.json" para "postgres_container" e salve o arquivo.

Pronto. Fazendo isso, é para funcionar.

### Swagger

Agora é só utilizar a URL abaixo e testar a api usando o Swagger:

```
http://localhost:3000/api-docs/
```



