const express = require('express');
const router = express.Router();

const produtosController = require('./controllers/produtosController');

router.get('/produtos/:id', produtosController.buscarProdutoController);
router.post('/produtos', produtosController.cadastrarProdutoController);

module.exports = router;
