class SavedSplitsView {
  _parentEl = document.querySelector('.saved_splits_list');

  displaySavedSplit(splitData) {
    console.log(splitData);
    if (Object.keys(splitData).length === 0) return;
    this._parentEl.innerHTML = '';
    splitData.forEach(split => {
      this._parentEl.insertAdjacentHTML(
        'beforeend',
        `<li class="saved_list_item">${split[0]}</li>`
      );
    });
  }
}

export default new SavedSplitsView();
