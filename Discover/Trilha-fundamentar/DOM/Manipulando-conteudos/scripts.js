// Manipulando conteúdo
// textContent
let element = document.querySelector('h1')

element.textContent += " Olá Devs!"

// console.log(element.textContent)


// innerText
element.innerText = "Olá Devs"


// innerHTML - Adiciona HTML diretamente no elemento
element.innerHTML = "Olá Devs! <small>!!!</small>"


// value
element = document.querySelector('input')
console.log(element.value)
element.value = "outra coisa"


// Atributos

const header = document.querySelector("header")
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')