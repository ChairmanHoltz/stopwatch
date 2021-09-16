class SavedSplitsView {
  _parentEl = document.querySelector('.saved_splits_list');

  displaySavedSplit(splitData) {
    console.log(splitData);
    if (Object.keys(splitData).length === 0) return;
    splitData.forEach(split => {
      this._parentEl.insertAdjacentHTML('beforeend', `<li>${split[0]}</li>`);
    });
  }
}

export default new SavedSplitsView();
