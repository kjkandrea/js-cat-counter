import counter from '../views/Counter.js'
import catList from '../views/CatList.js'

import count from '../models/count.js'

const counterEl = document.getElementById('counter')
const catListEL = document.getElementById('cat-list')

const controller = {
  views: {
    counter: null,
    catList: null
  },
  init() {
    this.views.counter = counter.init(counterEl, count.value)
      .on('@count:increment', () => this.increment())
      .on('@count:decrement', () => this.decrement())

    this.catList = catList.init(catListEL, count.value)
  },
  increment() {
    count.increment(3)
    this.views.counter.setCount(count.value)
    this.catList.setCats(count.value)
  },
  decrement() {
    count.decrement(3)
    this.views.counter.setCount(count.value)
    this.catList.setCats(count.value)
  }
}

export default controller;