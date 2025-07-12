const repository = require('../repository')

async function buscarProdutoPorId(id) {
  if (!id) throw new Error('ID inválido');
  
  const produto = await repository.buscarProdutoPorId(id);
  
  if (!produto) throw new Error('Produto não encontrado');

  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco
  };
}

async function cadastrarProduto(dadosProduto) {
  
  const produto = await repository.cadastrarProduto(dadosProduto);
  
  if (!produto) throw new Error('Produto não cadastrado');

  return {
    nome: produto.nome,
    preco: produto.preco
  };
}

module.exports = {
  buscarProdutoPorId,
  cadastrarProduto
};

