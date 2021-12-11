class Counter {
  init (el, count) {
    this._el = el
    this._events = {
      '@count:increment': () => console.log('increment'),
      '@count:decrement': () => console.log('decrement')
    }

    this.setCount(count)
    this.attachEvents()
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

  emit (eventName) {
    this._events[eventName]?.()
  }
}

export default new Counter()