const database = require('../models');


class Services{
    constructor(nomeDaModel){
        this.nomeDaModel = nomeDaModel;
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDaModel].findAll();
    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDaModel].findAll({ where: { ...where } });
    }

    async pegaUmRegistro(where = {}) {
        return database[this.nomeDaModel].findOne({ where: { ...where } });
    }

    async criaRegistro(dados) {
        return database[this.nomeDaModel].create(dados);
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDaModel].update(dadosAtualizados, { where: { id: id } }, transacao);
    }

    async apagaRegistro(id) {
        return database[this.nomeDaModel].destroy({ where: { id: id } });
    }

    async restauraRegistro(id) {
        return database[this.nomeDaModel].restore({ where: { id: id } });
    }

    async consultaRegistroApagado(id) {
        return database[this.nomeDaModel].findOne({ paranoid: false, where: { id: Number(id) } });
    }

    async encontraEContaRegistros(where = {}, agregadores) {
        return database[this.nomeDaModel].findAndCountAll({ where: { ...where }, ...agregadores });
    }
}

module.exports = Services