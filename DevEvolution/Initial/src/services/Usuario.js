const modelUsuario = require('../models/usuario');

const jwt = require('jsonwebtoken');

module.exports = class Usuario{

    async token(body) {
        const email = body.email;
        const senha = body.senha;

        if(!email || !senha) {
            return {status: 400, message: "Email e senha são obrigatórios"};
        }

        const usuario = await modelUsuario.findOne({email: email, senha: senha});

        if(!usuario) {
            return {status: 400, message: "Email ou senha inválidos"};
        }

        return jwt.sign({
            _id: usuario._id
        }, 'secret')
    }

    async create(body) {
        const usuario = await modelUsuario.create(body);
        return usuario;
    }

    async find() {
        const usuario = await modelUsuario.find();
        return usuario;
    }

    async findOne(id) {
        const usuario = await modelUsuario.findOne({_id: id});
        return usuario;
    }

    async updateOne(id, body) {
        const usuario = await modelUsuario.updateOne({_id: id},{$set: body});
        return usuario;
    }

    async deleteOne(id) {
        const usuario = await modelUsuario.deleteOne({_id: id});
        return usuario;
    }

    async agroupSex() {
        const usuario = await modelUsuario.aggregate([
            {$group: {_id: "$sexo", count: {$sum: 1}}}
        ]);
        return usuario;
    }

    async agroupCarros() {
        const usuario = await modelUsuario.aggregate([
            {$group: {_id: "$carro", count: {$sum: 1}}}
        ]);
        return usuario;
    }

}