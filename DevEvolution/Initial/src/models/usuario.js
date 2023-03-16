const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: String,
    senha: String,
    nome: String,
    idade: Number,
    carro: {type: mongoose.Schema.Types.ObjectId, ref: 'carro'}
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');