const service = require('../services/produtosService');

async function buscarProdutoController(req, res) {
  try {
    const id = req.params.id;
    const produto = await service.buscarProdutoPorId(id);
    res.json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  buscarProdutoController
};

async function cadastrarProdutoController(req, res) {
  try {
    const produto = await service.cadastrarProduto(req.body);
    res.json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  buscarProdutoController,
 cadastrarProdutoController
};