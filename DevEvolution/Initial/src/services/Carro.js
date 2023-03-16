const modelCarro= require('../models/carro.js');

module.exports = class Carro{

    async create(body) {
        const retorno = await modelCarro.create(body);

        return retorno;
    }
}