const db = require('./db');
const service = require('./services/produtosService');

function buscarProdutoPorId(id) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Produtos WHERE id = ?', [id], (error, resultado) => {
      if (error) {
        reject(error);
        return;
      }

      if (resultado.length > 0) {
        resolve(resultado[0]);
      } else {
        resolve(null);
      }
    });
  });
}

function cadastrarProduto(dadosProduto) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO Produtos (nome, preco) VALUES (?, ?)';
    db.query(sql, [dadosProduto.nome, dadosProduto.preco], (error, resultado) => {
      if (error) {
        reject(error);
        return;
      }

      if (resultado.affectedRows > 0) {
        resolve({ id: resultado.insertId, ...dadosProduto });
      } else {
        resolve(null);
      }
    });
  });
}

function atualizarProduto(id, nome, preco) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE Produtos SET nome = ?, preco = ? WHERE id = ?';
    db.query(sql, [nome, preco, id], (error, resultado) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(resultado);
    });
  });
}

 function buscarProdutos() {
  return new Promise((aceito, rejeitado) => {
    db.query('SELECT * FROM Produtos', (error, results) => {
      if (error) {
        rejeitado(error);
        return;
      }
      aceito(results);
    });
  });
}


module.exports = {
  buscarProdutoPorId,
  cadastrarProduto,
  atualizarProduto,
  buscarProdutos
};

