/**
 * Transformar notas escolares
 * 
 * Crie um algoritmo que transforme as notas do sistema
 * numérico para sistema de notas em caracteres tipo A B C
 * 
 * * De 90 pra cima - A
 * * entre 80 - 90  - B
 * * entre 70 - 89  - C
 * * entre 60 - 69  - D
 * * menos que 60  - F
 */

let nota = 100

if (90 <= nota) {
  nota = 'A'
} else if (80 <= nota) {
  nota = 'B'
} else if (70 <= nota) {
  nota = 'C'
} else if (60 <= nota) {
  nota = 'D'
} else {
  nota = 'F'
}

console.log(nota)