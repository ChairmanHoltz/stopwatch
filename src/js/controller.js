import * as model from './model.js';
import mainView from './views/mainView.js';
import splitView from './views/splitView.js';
import splitListView from './views/splitListView.js';
import savedSplitsView from './views/savedSplitsView.js';
import selectedSplitView from './views/selectedSplitView.js';

const controlStartBtn = function () {
  mainView.renderTime(model.state.clock);
  model.incrementTimer();
};

const controlStopBtn = function () {};

const controlSplitBtn = function () {
  model.updateSplitCount('increase');
  splitView.displaySplit(model.state.clock, model.state.splitCounter);
  splitListView.createSplitList(model.state.clock);
  model.pushSplit(model.state.clock);
};

const controlResetBtn = function () {
  model.clearSplits();
  model.resetTimer();
  mainView.renderTime(model.state.clock);
  model.updateSplitCount('reset');
};

const controlSaveBtn = async function (splitName) {
  try {
    await model.revGeoCoding();
    model.saveSplit(splitName);
    splitListView.clear();
    model.loadSplit();
    savedSplitsView.displaySavedSplit(model.state.savedSplits);
    model.clearSplits();
  } catch (err) {
    splitListView.renderError(err);
  }
};

const controlSavedSplitsLinks = function (splitNumber) {
  selectedSplitView.displaySelectedSplit(model.state.savedSplits[splitNumber]);
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
  savedSplitsView.addHandlerSavedSplits(controlSavedSplitsLinks);
};
init();
