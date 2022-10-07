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
Rode os comandos a seguir para executar o projeto.

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

Abra um novo terminal e acesse a pasta backend-api do projeto para executar os passos a seguir .

Alterar o campo "host" no arquivo "config.json" dentro da pasta "src/config" de "postgres_container" para "localhost" e rodar os comandos a seguir para criar a tabela e preencher com alguns dados iniciais:
```
cd .\backend-api\
```
```
npx sequelize-cli db:migrate
```
```
npx sequelize-cli db:seed:all
```

Após isso, volte o campo "host" no arquivo "config.json" para "postgres_container".

Pronto.

