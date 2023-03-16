const FilmeService = new (require('../services/Filme'));

module.exports =
class FilmeController {

    async create(req, res) {
        const filme = await FilmeService.create(req.body);
        res.json(filme);
    }

    async findFilmeCategoria(req, res) {
        const filme = await FilmeService.findFilmeCategoria(req.params.id);
        res.json(filme);
    }

    async findCountFilmeCategoria(req, res) {
        const filme = await FilmeService.findCountFilmeCategoria();
        res.json(filme);
    }

}
