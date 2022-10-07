const { Router } = require('express');
const VeiculoController = require("../controllers/VeiculoController.js");

const router = Router();

router
    .get("/", VeiculoController.buscarTodos)
    .get("/carros", VeiculoController.buscarTodos)
    .get("/carros/:id", VeiculoController.buscarPorId)

    .post("/carros", VeiculoController.cadastraVeiculo)

    .put('/carros/:id', VeiculoController.atualizaUmVeiculo)
    .put('/carros/:id/inativa', VeiculoController.inativaUmVeiculo)
    .put('/carros/:id/reativa', VeiculoController.reativaUmVeiculo)
    .put('/carros/:id/restaura', VeiculoController.restauraUmVeiculo)

    .delete('/carros/:id', VeiculoController.apagaUmVeiculo);

module.exports = router;