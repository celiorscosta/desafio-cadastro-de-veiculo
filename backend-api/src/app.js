const express = require('express');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require ('./swagger.json');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

routes(app);

app.listen(port, ()=> console.log(`Servidor esta rodando na porta ${port}`));

module.exports = app;