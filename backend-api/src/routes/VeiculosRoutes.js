const { Router } = require('express');
const VeiculoController = require("../controllers/VeiculoController.js");

const router = Router();

router
    .get("/", VeiculoController.buscarTodos)
    .get("/carros", VeiculoController.buscarTodos)
    .get("/carros/:id", VeiculoController.buscarPorId)

    .post("/carros/novo", VeiculoController.cadastraVeiculo)

    .put('/carros/:id/atualiza', VeiculoController.atualizaUmVeiculo)
    .put('/carros/:id/inativa', VeiculoController.inativaUmVeiculo)
    .put('/carros/:id/reativa', VeiculoController.reativaUmVeiculo)
    .put('/carros/:id/restaura', VeiculoController.restauraUmVeiculo)

    .delete('/carros/:id/deleta', VeiculoController.apagaUmVeiculo);

module.exports = router;