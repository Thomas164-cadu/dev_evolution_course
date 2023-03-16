const mongoose = require('mongoose');

const filmeSchema = mongoose.Schema({
    nome: String,
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'}
});

module.exports = mongoose.model('filme', filmeSchema, 'filmes');