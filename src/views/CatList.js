import View from './View.js'

class CatList extends View {
  init (el, count) {
    this._el = el

    this.setCats(count)

    return this
  }

  setCats (count) {
    this._el.innerHTML = ''
    for (let i = 0; i < count ; i++) this._el.append(this.cat)
  }

  get cat () {
    const li = document.createElement('li')
    li.textContent = '🐈'
    return li
  }
}

export default new CatList()