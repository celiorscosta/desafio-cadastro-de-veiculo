const { VeiculoServices } = require('../services');
const veiculosServices = new VeiculoServices();

class VeiculoController {
    static async buscarTodos(req, res) {
        try {
            const veiculos = await veiculosServices.pegaTodosOsRegistros();
            return res.status(200).json(veiculos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const veiculo = await veiculosServices.pegaUmRegistro({ id });
            return res.status(200).json(veiculo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastraVeiculo(req, res) {
        const novoVeiculo = req.body;
        try {
            const novoVeiculoCriado = await veiculosServices.criaRegistro(novoVeiculo);
            return res.status(200).json(novoVeiculoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUmVeiculo(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await veiculosServices.atualizaRegistro(novasInfos, Number(id));
            return res.status(200).json({ mensagem: `id ${id} atualizado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaUmVeiculo(req, res) {
        const { id } = req.params;
        try {
            await veiculosServices.apagaRegistro(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraUmVeiculo(req, res) {
        const { id } = req.params;
        try {

            const registroRestaurado = await veiculosServices.restauraRegistro(Number(id));
            return res.status(200).json(registroRestaurado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async inativaUmVeiculo(req, res) {
        const { id } = req.params;
        try {
            await veiculosServices.atualizaRegistro({ ativo: false }, Number(id));
            return res.status(200).json({ mensagem: `id ${id} inativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async reativaUmVeiculo(req, res) {
        const { id } = req.params;
        try {
            await veiculosServices.atualizaRegistro({ ativo: true }, Number(id));
            return res.status(200).json({ mensagem: `id ${id} reativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = VeiculoController;