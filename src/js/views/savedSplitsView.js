class SavedSplitsView {
  _parentEl = document.querySelector('.saved_split_list');

  displaySavedSplit() {
    this._parentEl.insertAdjacentElement('beforeend');
  }
}

export default new SavedSplitsView();
