// // Lista de argumentos
// console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)

// process é um objeto que contém o processo que está rodando no node