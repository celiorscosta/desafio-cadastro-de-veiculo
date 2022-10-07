const Services = require('./Services');
const database = require('../models');

class VeiculoServices extends Services{
    constructor(){
        super('Carros');
    }
}

module.exports = VeiculoServices;