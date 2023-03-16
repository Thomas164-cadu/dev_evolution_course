const express = require('express');
const router = express.Router();
const UsuarioController = new (require('../controllers/Usuarios.js'));
const CarrosController = new (require('../controllers/Carros.js'));
const FilmeController = new (require('../controllers/Filmes.js'));
const CategoriaController = new (require('../controllers/Categorias.js'));

const validate = require('./auth/validate');

/**
 * Usuário
 */

router.post('/usuario/token', (req, res) => {
  UsuarioController.token(req, res);
});

router.post('/usuario', validate(), (req, res) => {
    UsuarioController.create(req, res);
});

router.delete('/usuario/:id', validate(), (req, res) => {
    UsuarioController.deleteOne(req, res);
});

router.get('/usuario', validate(), (req, res) => {
    UsuarioController.find(req, res);
});

router.get('/usuario/sexs', validate(), (req, res) => {
    UsuarioController.agroupSex(req, res);
});

router.get('/usuario/carros', validate(), (req, res) => {
    UsuarioController.agroupCarros(req, res);
});

router.get('/usuario/:id', validate(), (req, res) => {
    UsuarioController.findOne(req, res);
});

router.put('/usuario/:id', validate(), (req, res) => {
    UsuarioController.updateOne(req, res);
});

/**
 * Carro
 */

router.post('/carro', validate(), (req, res) => {
    CarrosController.create(req, res);
});


/**
 * Filme
 */

router.post('/filme', validate(), (req, res) => {
    FilmeController.create(req, res);
});

router.get('/filme/categoria/:id', validate(), (req, res) => {
    FilmeController.findFilmeCategoria(req, res);
});

router.get('/filme/count/categoria', validate(), (req, res) => {
    FilmeController.findCountFilmeCategoria(req, res);
});
/**
 * Categoria
 */

router.post('/categoria', validate(), (req, res) => {
    CategoriaController.create(req, res);
});

module.exports = router;