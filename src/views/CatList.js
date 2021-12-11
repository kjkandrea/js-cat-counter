import View from './View.js'

class CatList extends View {
  init (el, count) {
    this._el = el

    this.setCats(count)
  }

  setCats (count) {
    console.log(count)
  }
}

export default new CatList()