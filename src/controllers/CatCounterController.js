import counter from '../views/Counter.js'
import count from '../models/count.js'

const counterEl = document.getElementById('counter')

const controller = {
  views: {
    counter: null
  },
  init() {
    this.views.counter = counter.init(counterEl, count.value)
      .on('@count:increment', () => this.increment())
      .on('@count:decrement', () => this.decrement())
  },
  increment() {
    count.increment()
    this.views.counter.setCount(count.value)
  },
  decrement() {
    count.decrement()
    this.views.counter.setCount(count.value)
  }
}

export default controller;