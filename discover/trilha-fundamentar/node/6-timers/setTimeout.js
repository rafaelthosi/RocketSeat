// setTimeout rodar uma função depois de X milissegundos
const timeOut = 3000 // 3 segundos
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('Mostrar')