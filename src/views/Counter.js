class Counter {
  init (el) {
    this._el = el

    this.attachEvents()
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
    inputEl.value = Number(inputEl.value) - 1
  }
}

export default new Counter()