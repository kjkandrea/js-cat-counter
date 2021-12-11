class Counter {
  init (el) {
    this._el = el

    this.attachEvents()
    console.log(this._el)
  }

  attachEvents () {
    const [incrementEl, decrementEl] = this._el.querySelectorAll('button')
    incrementEl.addEventListener('click', () => this.increment())
    decrementEl.addEventListener('click', () => this.decrement())
  }

  increment() {
    console.log('+')
  }

  decrement() {
    console.log('-')
  }
}

export default new Counter()