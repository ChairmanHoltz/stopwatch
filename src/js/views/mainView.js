import splitListView from './splitListView.js';

class mainView {
  _parentEl = document.querySelector('.center');
  _timer = document.querySelector('.timer');

  renderTime(time) {
    this._timer.textContent = `${time.minTens}${time.minOnes}:${time.secTens}${time.secOnes}.${time.secTenths}${time.secHundreths}`;
  }

  addHandlersBtns(handlerStart, handlerStop, handlerSplit, handlerReset) {
    // necessary variables
    let intervalID;
    const timer = this._timer;
    const start = this._parentEl.querySelector('.start');
    const stop = this._parentEl.querySelector('.stop');
    const reset = this._parentEl.querySelector('.reset');
    const split = this._parentEl.querySelector('.split');

    // toggle btn functions
    const activateBtns = function (...btns) {
      btns.forEach(btn => {
        if (btn.disabled) btn.disabled = false;
      });
    };
    const disableBtns = function (...btns) {
      btns.forEach(btn => {
        if (!btn.disabled) btn.disabled = true;
      });
    };

    // add event listeners for btns
    this._parentEl.addEventListener('click', function (e) {
      const clickedBtn = e.target.closest('.btn');
      // no btn guard clause
      if (!clickedBtn) return;

      // start btn
      if (clickedBtn === start) {
        intervalID = setInterval(handlerStart, 10);
        disableBtns(start);
        activateBtns(stop, reset, split);
      }

      // stop btn
      if (clickedBtn === stop) {
        clearInterval(intervalID);
        handlerStop();
        disableBtns(stop);
        activateBtns(start);
      }

      // split btn
      if (clickedBtn === split) {
        handlerSplit();
      }

      // reset btn
      if (clickedBtn === reset) {
        clearInterval(intervalID);
        handlerReset();
        activateBtns(start);
        disableBtns(stop, reset, split);
        splitListView.clear();
        timer.textContent = '00:00.00';
      }
    });
  }
}

export default new mainView();
