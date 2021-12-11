import counter from '../views/Counter.js'

const counterEl = document.getElementById('counter')

const controller = {
  run() {
    counter.init(counterEl)
  }
}

export default controller;