// acesso.js
const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', (req, res) => {
    res.render('login'); 
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM Usuarios WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao realizar login.');
            throw err;
        }
        if (result.length > 0) {
            res.redirect('/dashboard'); 
        } else {
            
            res.redirect('/');
        }
    });
});

router.post('/cadastrar', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM Usuarios WHERE username = ?', [username], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao verificar usuário.');
            throw err;
        }
        if (result.length > 0) {
            // Usuário já existe, redirecionar de volta para a página de login com mensagem de erro
            res.redirect('/?error=existing_user');
        } else {
            // Cadastrar novo usuário
            db.query('INSERT INTO Usuarios (username, password) VALUES (?, ?)', [username, password], (err, result) => {
                if (err) {
                    res.status(500).send('Erro ao cadastrar usuário.');
                    throw err;
                }
                res.redirect('/dashboard'); // Redirecionar para página principal após o cadastro
            });
        }
    });
});


router.get('/dashboard', (req, res) => {
    res.render('dashboard'); 
    });

module.exports = router;