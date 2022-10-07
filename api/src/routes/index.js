const bodyParser = require('body-parser');
const veiculos = require('./VeiculosRoutes');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        veiculos
    );
}
