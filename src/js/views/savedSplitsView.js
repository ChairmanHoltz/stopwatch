class SavedSplitsView {
  _parentEl = document.querySelector('.saved_splits_list');

  addHandlerSavedSplits(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('saved_list_item')) return;
      const splitNumber = clicked.dataset.splitNumber;
      handler(splitNumber);
    });
  }

  displaySavedSplit(splitData) {
    if (Object.keys(splitData).length === 0) return;
    this._parentEl.innerHTML = '';
    splitData.forEach((split, i) => {
      const arrIndexDate = split[1][split[1].length - 1];
      const arrIndexLocation = split[1][split[1].length - 2];
      this._parentEl.insertAdjacentHTML(
        'beforeend',
        `<li class="saved_list_item" data-split-number="${i}">${split[0]}: ${arrIndexDate.date}<br>
        ${arrIndexLocation.location}</li>`
      );
    });
  }
}

export default new SavedSplitsView();
