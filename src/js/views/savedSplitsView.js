class SavedSplitsView {
  _parentEl = document.querySelector('.saved_splits_list');

  displaySavedSplit(splitData) {
    if (Object.keys(splitData).length === 0) return;
    this._parentEl.innerHTML = '';
    splitData.forEach(split => {
      this._parentEl.insertAdjacentHTML(
        'beforeend',
        `<li class="saved_list_item">${split[0]}: ${
          split[1][split[1].length - 1].day
        } ${split[1][split[1].length - 1].month}. ${
          split[1][split[1].length - 1].year
        }: ${split[1][split[1].length - 1].time.slice(0, 5)}hr</li>`
      );
    });
  }
}

export default new SavedSplitsView();
