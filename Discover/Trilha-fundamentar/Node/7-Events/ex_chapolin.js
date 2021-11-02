const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}
// inherits adiciona tudo da EventEmitter dentro de Character
inherits(Character, EventEmitter)

const chapolin = new Character('chapolin')
chapolin.on('help', () => console.log(`Eu, o ${chapolin.name} colorado!`))

console.log('Oh!, E agora, quem poderá me defender?')
chapolin.emit('help')