/**
 * Celsius para Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou
 * fahrenheit e faça a transformação de uma unidade para
 * outra
 * 
 * C = (F - 32) * 5/9
 * F = C * 9/5 + 32
 */

function converteTemp(unidade) {
  let celsius = unidade.indexOf('°C') === -1 ? null : Number(unidade.split('°')[0])
  let fahrenheit = unidade.indexOf('°F') === -1 ? null : Number(unidade.split('°')[0])

  if (celsius && !fahrenheit) {
    fahrenheit = (celsius * 9 / 5 + 32).toFixed(2)
    return `${fahrenheit}°F`
  } else if (fahrenheit && !celsius) {
    celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2)
    return `${celsius}°C`
  } else {
    return 'Temperatura inválida'
  }
}

console.log(converteTemp('42°F'))