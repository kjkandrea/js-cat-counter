import counter from '../views/Counter.js'
import count from '../models/count.js'

const counterEl = document.getElementById('counter')

const controller = {
  run() {
    counter.init(counterEl, count.value)
      .on('@count:increment', () => console.log('increment'))
      .on('@count:decrement', () => console.log('decrement'))
  }
}

export default controller;