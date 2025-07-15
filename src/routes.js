const express = require('express');
const router = express.Router();

const produtosController = require('./controllers/produtosController');

router.get('/produtos/:id', produtosController.buscarProdutoController);
router.post('/produtos', produtosController.cadastrarProdutoController);
router.put('/produtos/:id', produtosController.atualizarProdutoController);

module.exports = router;
