const count = {
  _value: 0,
  get value() {
    return this._value
  },
  increment(aCount = 1) {
    this._value = this._value + aCount
  },
  decrement(aCount = 1) {
    this._value >= aCount ? this._value = this._value - aCount : this._value = 0;
  }
}

export default count;