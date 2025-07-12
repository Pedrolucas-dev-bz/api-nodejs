const db = require('./db');
const { cadastrarProduto: cadastrarProdutoService } = require('./services/produtosService');


   function buscarProdutoPorId(id) {
  return new Promise((aceito, rejeitado) => {
    db.query('SELECT * FROM Produtos WHERE id = ?', [id], (error, resultado) => {
      if (error) {
        rejeitado(error);
        return;
      }

      if (resultado.length > 0) {
        aceito(resultado[0]);
      } else {
        aceito(null);
      }
    });
  });
}


 
  function cadastrarProduto(dadosProduto) {
  return new Promise((aceito, rejeitado) => {
    const sql = 'INSERT INTO Produtos (nome, preco) VALUES (?, ?)';
    db.query(sql, [dadosProduto.nome, dadosProduto.preco], (error, resultado) => {
      if (error) {
        rejeitado(error);
        return;
      }

      if (resultado.affectedRows > 0) {
        aceito({ id: resultado.insertId, ...dadosProduto });
      } else {
        aceito(null);
      }
    });
  });
}

module.exports = {
  buscarProdutoPorId,
  cadastrarProduto
};
