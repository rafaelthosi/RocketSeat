// Alterando estilos
// Detalhe, converter nomes de atributos em camelCase. Ex: background-color para backgroundColor
const element = document.querySelector('body')

// element.style.backgroundColor = '#f9f3d2'


// classList
element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active') // toggle remove ou adiciona
