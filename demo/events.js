const EventEmitter = require('events')

// const emitter = new EventEmitter()
//
// emitter.on('event', data => {
//   console.log('ON: event', data)
// })
//
// emitter.emit('event', { a: 1 })
// emitter.emit('event', { b: 2 })
//
// setTimeout(() => {
//   emitter.emit('event', { c: 3 })
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, callBack) {
    console.log('[Subscribe...]')
    this.on(eventName, callBack)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('event1', data => {
  console.log('subscribing on event1 with data: ', data)
})

dis.dispatch('event1', { data: 123 })
