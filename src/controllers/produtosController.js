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

async function cadastrarProdutoController(req, res) {
  try {
    const produto = await service.cadastrarProduto(req.body);
    res.json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function atualizarProdutoController(req, res) {
  try {
    const id = req.params.id;
    const { nome, preco } = req.body;

    if (!nome || !preco) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    }

    const produtoAtualizado = await service.atualizarProduto(id, nome, preco);
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function buscarProdutosController(req, res) {
  let json = { error: '', result: [] };

  const produtos = await service.buscarProdutos();

  for (let i in produtos) {
    json.result.push({
      nome: produtos[i].nome,
      preco: produtos[i].preco
    });
  }

  res.json(json);
}


module.exports = {
  buscarProdutoController,
  cadastrarProdutoController,
  atualizarProdutoController,
  buscarProdutosController
};
