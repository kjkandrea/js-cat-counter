import counter from '../views/Counter.js'
import count from '../models/count.js'

const counterEl = document.getElementById('counter')

const controller = {
  run() {
    counter.init(counterEl)

    count.increment()
    console.log(count.value)
  }
}

export default controller;