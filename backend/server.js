const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados temporário em memória
let usuarios = [];

// Rota para cadastrar usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: 'Nome e e-mail são obrigatórios.' });
  }

  usuarios.push({ nome, email });
  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
});

// Rota para listar todos os usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
