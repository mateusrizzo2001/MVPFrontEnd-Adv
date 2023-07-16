const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Escolha a porta que desejar

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/agendamento', (req, res) => {
  const { name, message, clinic, specialist, preferredDate } = req.body;

  // Aqui você pode processar os dados do agendamento
  // Exemplo: salvar os dados em um banco de dados, enviar um e-mail de confirmação, etc.

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
