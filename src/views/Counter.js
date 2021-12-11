class Counter {
  init (el, count) {
    this._el = el

    this.setCount(count)
    this.attachEvents()
  }

  setCount(count) {
    this._el.children.counter.value = count
  }

  attachEvents () {
    const increment = this._el.children.increment
    const decrement = this._el.children.decrement
    const counter = this._el.children.counter
    increment.addEventListener('click', () => this.increment(counter))
    decrement.addEventListener('click', () => this.decrement(counter))
  }

  increment(inputEl) {
    inputEl.value = Number(inputEl.value) + 1
  }

  decrement(inputEl) {
    if (inputEl.value >= 1) inputEl.value = Number(inputEl.value) - 1
  }
}

export default new Counter()