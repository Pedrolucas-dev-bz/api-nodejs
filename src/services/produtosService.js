const repository = require('../repository');

async function buscarProdutoPorId(id) {
  if (!id) throw new Error('ID inválido');

  const produto = await repository.buscarProdutoPorId(id);
  if (!produto) throw new Error('Produto não encontrado');

  return produto;
}

async function cadastrarProduto(dadosProduto) {
  if (!dadosProduto.nome || !dadosProduto.preco) {
    throw new Error('Dados incompletos');
  }

  const produto = await repository.cadastrarProduto(dadosProduto);
  if (!produto) throw new Error('Produto não cadastrado');

  return produto;
}

async function atualizarProduto(id, nome, preco) {
  if (!id || !nome || !preco) throw new Error('Dados inválidos');

  const result = await repository.atualizarProduto(id, nome, preco);
  return {
    id,
    nome,
    preco
  };
}

module.exports = {
  buscarProdutoPorId,
  cadastrarProduto,
  atualizarProduto
};


