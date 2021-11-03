/**
 * Sistema de gastos familiares
 * 
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 * * receitas: []
 * * despesas: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas
 * e despesas e irá mostrar uma mensagem se a família está com
 * saldo positivo ou negativo, seguido do valor do saldo
 */

const familia = {
  receitas: [10.99, 55.50, 40],
  despesas: [30, 20.99]
}

function confereSaldo(receitas = familia.receitas, despesas = familia.despesas) {
  const totalReceitas = receitas.reduce((total, element) => total + element )
  const totalDespesas = despesas.reduce((total, element) => total + element )
  const saldo = (totalReceitas - totalDespesas).toFixed(2)
  
  if (saldo > 0) {
    console.log(`Família com saldo positivo! Saldo: ${saldo}`)
  } else if (saldo < 0) {
    console.log(`Família com saldo negativo! Saldo: ${saldo}`)
  } else if (saldo == 0) {
    console.log(`Saldo: ${saldo}`)
  }
}

confereSaldo()