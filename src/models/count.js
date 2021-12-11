const count = {
  _value: 1,
  get value() {
    return this._value
  },
  increment() {
    this._value++
  },
  decrement() {
    this._value >= 1 && this._value--
  }
}

export default count;