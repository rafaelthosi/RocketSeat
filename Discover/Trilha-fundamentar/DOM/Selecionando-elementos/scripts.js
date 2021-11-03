// getElementById()

const elementId = document.getElementById('blog-title')
// console.log(elementId)

// getElementByClassName()

const elementsClass = document.getElementsByClassName('one')
console.log(elementsClass)

// getElementsByTagName()

const elementsTag = document.getElementsByTagName('h1')
// console.log(elementsTag)

// querySelector()

let elementQuery = document.querySelector('.one')
// console.log(elementQuery)
elementQuery = document.querySelector('#blog-title')
// console.log(elementQuery)
elementQuery = document.querySelector('head')
// console.log(elementQuery)
elementQuery = document.querySelector('[src]')
// console.log(elementQuery)

// querySelectorAll()

let elementsQueryAll = document.querySelectorAll('#blog-title')
// console.log(elementsQueryAll)
elementsQueryAll = document.querySelectorAll('.one')
console.log(elementsQueryAll)


// Diferença HTMLCollection(getElementsByClassName) e NodeList(querySelectorAll):

// NodeList retorna um Array, que pode ser manipulado com funções no JS, exemplo
elementsQueryAll.forEach(element => console.log(element))

// Enquanto o HTMLCollection retorna um HTML
// Retorna Erro: elementsClass.forEach(element => console.log(element))