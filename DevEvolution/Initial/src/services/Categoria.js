const modelCategoria = require('../models/categoria');

module.exports = class Categoria {

    async create(body) {
        const retorno = await modelCategoria.create(body);

        return retorno;
    }

    async find() {
        const retorno = await modelCategoria.find();

        return retorno;
    }
}