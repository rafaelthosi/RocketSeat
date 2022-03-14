## [link](https://www.youtube.com/playlist?list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp) do curso

# Comandos usados (Terminal):
- npm init -y
- yarn add express
- yarn add body-parser
- yarn add mongoose

# Correção necessária do conteudo original do vídeo
Por o video ser de 2017(estou fazendo em 2021), foi necessário alterar o arquivo database/index.js
antes:
```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
```
depois:
```
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/noderest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = mongoose;
```