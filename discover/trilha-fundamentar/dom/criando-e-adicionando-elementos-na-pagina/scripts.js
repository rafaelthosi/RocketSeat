// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = 'Olá Devs!'

// append prepend
const body = document.querySelector('body')

body.prepend(div) // antes
body.append(div) // depois

// insertBefore
const script = document.querySelector('script')
body.insertBefore(div, script)

// Simulando insertAfter (não existe)
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)