import View from './view.js';
import previewView from './previewView.js';

class BookmarkView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateHtml() {
    return this._data.map(entry => previewView.render(entry, false)).join('\n');
  }
}

export default new BookmarkView();
