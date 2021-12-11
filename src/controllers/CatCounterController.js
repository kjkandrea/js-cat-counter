import counter from '../views/Counter.js'
import count from '../models/count.js'

const counterEl = document.getElementById('counter')

const controller = {
  run() {
    count.increment()
    count.increment()
    count.increment()

    counter.init(counterEl, count.value)
  }
}

export default controller;