import mainView from './mainView.js';

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

  addHandlerSaveBtn(handler) {
    const save = document.querySelector('.save');
    const splitName = document.querySelector('.input');
    save.addEventListener('click', function () {
      console.log('save');
      handler(splitName.value);
      splitName.value = '';
    });
  }
}

export default new SplitListView();
