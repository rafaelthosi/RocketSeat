// clearInterval irá cancelar um setInterval registrando
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
setTimeout(() => clearInterval(interval), 4000)