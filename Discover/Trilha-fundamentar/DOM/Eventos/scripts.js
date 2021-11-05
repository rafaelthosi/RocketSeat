// Eventos

function print() {
  console.log("print")
}

const input = document.querySelector('input')

input.onkeydown = function() {
  console.log('rodei')
}
input.onkeyup = function() {
  console.log('rodei2')
}
input.onkeypress = function() {
  console.log('rodei3')
}




// addEventListener <- Mais recomendado, aceita varias funções

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

// element.event = function <- Só aceita uma função

function print2() {
  console.log("print2")
}

h1.onclick = print2

function print3() {
  console.log("print3")
}

h1.onclick = print3




// Argumento event
const input2 = document.querySelectorAll('input')[1]

input2.onkeypress = function(event) {
  console.log(event)
}