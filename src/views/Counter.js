import View from './View.js'

class Counter extends View {
  init (el, count) {
    this._el = el

    this.setCount(count)
    this.attachEvents()

    return this
  }

  setCount (count) {
    this._el.children.counter.value = count
  }

  attachEvents () {
    const increment = this._el.children.increment
    const decrement = this._el.children.decrement
    increment.addEventListener('click', () => this.emit('@count:increment'))
    decrement.addEventListener('click', () => this.emit('@count:decrement'))
  }
}

export default new Counter()