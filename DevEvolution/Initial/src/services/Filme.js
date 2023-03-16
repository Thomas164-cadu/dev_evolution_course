const modelFilme = require('../models/filme');

module.exports = class Filme {

    async create(body) {
        const retorno = await modelFilme.create(body);

        return retorno;
    }

    async findFilmeCategoria(id) {
        const retorno = await modelFilme.find({ categoria: id }).populate('categoria');

        return retorno;
    }

    async findCountFilmeCategoria() {
        const retorno = await modelFilme.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    count: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: "categorias",
                    localField: "_id",
                    foreignField: "_id",
                    as: "categoria"
                }
            },
            {
                $project: {
                    _id: 0,
                    categoria: { $arrayElemAt: ["$categoria.nome", 0] },
                    count: 1
                }
            }
        ]);
        return retorno;
    }
    
}