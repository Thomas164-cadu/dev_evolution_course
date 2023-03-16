const CarroService =  new (require('../services/Carro'));

module.exports = class CarrosController {

    async create(req, res) {
        const retorno = await CarroService.create(req.body);

        res.status(200).json(retorno);
    }

};