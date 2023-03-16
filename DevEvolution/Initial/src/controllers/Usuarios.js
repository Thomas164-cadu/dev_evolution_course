const UsuarioService =  new (require('../services/Usuario'));

module.exports = class Usuarios {

  async token(req, res) {
    const retorno = await UsuarioService.token(req.body);

    res.status(200).json(retorno);
  }

  async create(req, res) {
    const retorno = await UsuarioService.create(req.body);

    res.status(200).json(retorno);
  }

  async find(req, res) {
    const retorno = await UsuarioService.find();

    res.status(200).json(retorno);
  }

  async findOne(req, res) {
    const retorno = await UsuarioService.findOne(req.params.id);

    res.status(200).json(retorno);
  }

  async updateOne(req, res) {
    const retorno = await UsuarioService.updateOne(req.params.id, req.body);

    res.status(200).json(retorno);
  }

  async deleteOne(req, res) {
    const retorno = await UsuarioService.deleteOne(req.params.id);

    res.status(200).json(retorno);
  }

  async agroupSex(req, res) {
    const retorno = await UsuarioService.agroupSex();

    res.status(200).json(retorno);
  }

  async agroupCarros(req, res) {
    const retorno = await UsuarioService.agroupCarros();

    res.status(200).json(retorno);
  }

}