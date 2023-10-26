const connection = require('./connection'); // Módulo de conexão ao MySQL

exports.listagemClientes = (req, res) => {
  // Consulta de seleção (SELECT)
  connection.query('SELECT * FROM clientes', (err, result) => {
    if (err) throw err;
    res.render('listagemClientes', { clientes: result });
  });
};

exports.deletarClientes = (req, res) => {
  const id = req.params.id;
  // Consulta de exclusão (DELETE)
  connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    console.log('Cliente excluído com sucesso.');
    res.redirect('/listagemClientes');
  });
};
