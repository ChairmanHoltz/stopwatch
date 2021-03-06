import splitView from './splitView.js';

class SplitListView {
  _parentEl = document.querySelector('.split_list_container');
  _splitListEl = this._parentEl.querySelector('.split_list');

  clear() {
    this._splitListEl.innerHTML = '';
  }

  createSplitList(time) {
    this._splitListEl.insertAdjacentHTML(
      'beforeend',
      `<li>${time.minTens}${time.minOnes}:${time.secTens}${time.secOnes}:${time.secTenths}${time.secHundreths}</li>`
    );
  }

  renderError(err) {
    const errorDisplay = this._parentEl.querySelector('.error');
    errorDisplay.classList.add('fade-in-text');
    errorDisplay.textContent = err;
  }

  addHandlerSaveBtn(handler) {
    const save = document.querySelector('.save');
    const splitName = document.querySelector('.input');
    save.addEventListener('click', function () {
      handler(splitName.value);
      splitName.value = '';
    });
  }
}

export default new SplitListView();
