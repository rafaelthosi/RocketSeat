// require acessa módulos do node, sejam eles nativos, baixados ou criados por nós
// Módulos nativos:
const path = require('path')

// console.log(path)

// mais sobre o path: https://nodejs.org/api/path.html
console.log(path.basename(__filename))
console.log(path.basename('Users/starter/docs.js'))

// Meus módulos :
const myModule = require('./exports')

console.log(myModule)