const CategoriaService = new (require('../services/Categoria.js'));

module.exports = class CategoriaController {

    async create(req, res) {
        const retorno = await CategoriaService.create(req.body);

        return res.json(retorno);
    }
}