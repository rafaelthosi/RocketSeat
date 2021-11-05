// Navegando pelos elementos
// Pais:

// parentNode parentElement ||| Obs: não explicou diferenças entre eles, até então fazem a mesma coisa
const element = document.querySelector('body')

// console.log(element.parentNode)
// console.log(element.parentElement)




// Filhos

// childNodes(NodeList) children(HTMLCollection)
console.log(element.children)

console.log(element.childNodes) // tags e texts(espaços em branco, tabs)


// firstChild firstElementChild
console.log(element.firstChild) // tags e texts(espaços em branco, tabs)

console.log(element.firstElementChild)


// lastChild lastElementChild
console.log(element.lastChild)

console.log(element.lastElementChild)




// Irmãos

// nextSibling nextElementSibling
const el = document.querySelector('header')

console.log(el.nextSibling) // tags e texts(espaços em branco, tabs)

console.log(el.nextElementSibling)


// previousSibling previousElementSibling

console.log(element.previousSibling) // tags e texts(espaços em branco, tabs)

console.log(element.previousElementSibling)