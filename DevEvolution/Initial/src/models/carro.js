const mongoose = require('mongoose');

const carroSchema = mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('carro', carroSchema, 'carros');