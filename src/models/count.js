const count = {
  _value: 10,
  get value() {
    return this._value
  },
  increment(aCount) {
    this._value = this._value + aCount
  },
  decrement(aCount) {
    this._value >= aCount ? this._value = this._value - aCount : this._value = 0;
  }
}

export default count;