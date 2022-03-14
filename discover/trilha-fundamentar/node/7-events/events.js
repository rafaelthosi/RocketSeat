const { EventEmitter } = require('events')
const ev = new EventEmitter()
// o on escuta todos os eventos que forem emitidos
ev.on('saySomething', (message) => console.log(`eu ouvi você ${message}`))

ev.emit('saySomething', 'Thosi')
ev.emit('saySomething', 'Larissa')
// já o once escuta apenas o primeiro evento
ev.once('umaVez', (message) => console.log(`2eu ouvi você ${message}`))

ev.emit('umaVez', 'Thosi')
ev.emit('umaVez', 'Larissa')