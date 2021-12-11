import View from './View.js'

class CatList extends View {
  init (el, count) {
    this._el = el

    this.setCats(count)

    return this
  }

  setCats (count) {
    const appendCount = count - this._el.children.length;
    if (appendCount >= 1) for (let i = 0; i < appendCount ; i++) this._el.append(this.cat)
    else for (let i = 0; i > appendCount ; i--) this._el.lastChild.remove()
  }

  get cat () {
    const li = document.createElement('li')
    li.textContent = '🐈'
    return li
  }
}

export default new CatList()