import * as model from './model.js';
import mainView from './views/mainView.js';
import splitView from './views/splitView.js';
import splitListView from './views/splitListView.js';
import savedSplitsView from './views/savedSplitsView.js';

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
  try {
    model.saveSplit(splitName);
    splitListView.clear();
    model.loadSplit();
    savedSplitsView.displaySavedSplit(model.state.savedSplits);
  } catch (err) {
    splitListView.renderError(err);
  }
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
  savedSplitsView.displaySavedSplit(model.state.savedSplits);
};
init();
