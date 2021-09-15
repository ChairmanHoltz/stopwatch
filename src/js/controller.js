import * as model from './model.js';
import mainView from './views/mainView.js';
import splitView from './views/splitView.js';
import splitListView from './views/splitListView.js';

const controlStartBtn = function () {
  mainView.renderTime(model.state);
  model.incrementTimer();
};

const controlStopBtn = function () {};

const controlSplitBtn = function () {
  splitView.displaySplit(model.state);
  splitListView.createSplitList(model.state);
  model.pushSplit(model.state);
};

const controlResetBtn = function () {
  model.resetTimer();
  mainView.renderTime(model.state);
};

const controlSaveBtn = function (splitName) {
  model.saveSplit(splitName);
  splitListView.clear();
};

const init = function () {
  mainView.addHandlersBtns(
    controlStartBtn,
    controlStopBtn,
    controlSplitBtn,
    controlResetBtn
  );
  splitListView.addHandlerSaveBtn(controlSaveBtn);
  model.loadSplit();
};
init();
