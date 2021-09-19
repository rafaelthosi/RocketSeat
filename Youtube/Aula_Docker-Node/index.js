const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0'; // forma do docker entender que ele SÓ precisa repassar a porta 3000

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World teste');
})

app.listen(PORT, HOST)