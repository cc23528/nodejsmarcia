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


// -----------------

connection.connect((err) => {
  if (err) {
    console.error('Erro', err);
    return;
  }
  console.log('Conexão sucedida');
});

exports.mostrarFormularioCadastro = (req, res) => {
  res.render('cadastro');
};

exports.efetuarCadastro = (req, res) => {
  const { username, password } = req.body;
  const insertUserQuery = `INSERT INTO usuarios (username, password) VALUES (?, ?)`;

  connection.query(insertUserQuery, [username, password], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.send('Erro ao cadastrar usuário');
      return;
    }
    res.send('Usuário cadastrado!');
  });
};

exports.consultarUsuarios = (req, res) => {
  const selectUsersQuery = `SELECT * FROM usuarios`;

  connection.query(selectUsersQuery, (err, results) => {
    if (err) {
      console.error('Erro ao consultar usuários:', err);
      res.send('Erro ao consultar usuários');
      return;
    }
    res.send(results);
  });
};

exports.excluirUsuario = (req, res) => {
  const userId = req.params.id;
  const deleteUserQuery = `DELETE FROM usuarios WHERE id = ?`;

  connection.query(deleteUserQuery, [userId], (err, result) => {
    if (err) {
      console.error('Erro ao excluir usuário:', err);
      res.send('Erro ao excluir usuário');
      return;
    }
    res.send('Usuário excluído!');
  });
};

exports.alterarSenha = (req, res) => {
  const { userId, newPass } = req.body;
  const updatePasswordQuery = `UPDATE usuarios SET password = ? WHERE id = ?`;

  connection.query(updatePasswordQuery, [newPass, userId], (err, result) => {
    if (err) {
      console.error('Erro ao alterar senha:', err);
      res.send('Erro ao alterar senha');
      return;
    }
    res.send('Senha alterada!');
  });
};

exports.criarTipoConsulta = (req, res) => {
  const { tipo } = req.body;
  const insertTipoConsultaQuery = 'INSERT INTO Tipo_de_Consulta (Nome) VALUES (?)';
  
  connection.query(insertTipoConsultaQuery, [tipo], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar tipo de consulta:', err);
      res.send('Erro ao cadastrar tipo de consulta');
      return;
    }
    res.send('Tipo de consulta cadastrado com sucesso!');
  });
};
  
exports.listarTiposConsulta = (req, res) => {
  const selectTiposConsultaQuery = 'SELECT * FROM Tipo_de_Consulta';
  
  connection.query(selectTiposConsultaQuery, (err, results) => {
    if (err) {
      console.error('Erro ao listar tipos de consulta:', err);
      res.send('Erro ao listar tipos de consulta');
      return;
    }
    res.send(results);
  });
};

exports.criarStatusConsulta = (req, res) => {
  const { status } = req.body;
  const insertStatusConsultaQuery = 'INSERT INTO Status_da_Consulta (Nome) VALUES (?)';

  connection.query(insertStatusConsultaQuery, [status], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar status da consulta:', err);
      res.send('Erro ao cadastrar status da consulta');
      return;
    }
    res.send('Status da consulta cadastrado com sucesso!');
  });
};
 
exports.listarStatusConsulta = (req, res) => {
  const selectStatusConsultaQuery = 'SELECT * FROM Status_da_Consulta';

  connection.query(selectStatusConsultaQuery, (err, results) => {
    if (err) {
      console.error('Erro ao listar status da consulta:', err);
      res.send('Erro ao listar status da consulta');
      return;
    }
    res.send(results);
  });
};