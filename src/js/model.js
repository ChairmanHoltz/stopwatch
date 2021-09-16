'use strict';

export const state = {
  secTenths: 0,
  secHundreths: 0,
  secOnes: 0,
  secTens: 0,
  minOnes: 0,
  minTens: 0,
  savedSplits: [],
};

export const incrementTimer = function () {
  state.secHundreths += 1;
  if (state.secHundreths === 10) {
    state.secTenths += 1;
    state.secHundreths = 0;
  }
  if (state.secTenths === 10) {
    state.secOnes += 1;
    state.secTenths = 0;
  }
  if (state.secOnes === 10) {
    state.secTens += 1;
    state.secOnes = 0;
  }
  if (state.secTens === 6) {
    state.secTens = 0;
    state.minOnes += 1;
  }
};

export const resetTimer = function () {
  Object.keys(state).forEach(key => (state[key] = 0));
};

const _splitArr = [];

export const pushSplit = function (split) {
  _splitArr.push({ ...split });
};

export const saveSplit = function (splitName) {
  try {
    localStorage.setItem(splitName, JSON.stringify(_splitArr));
  } catch (err) {
    throw new Error('Storage is full. Please delete splits to save new ones.');
  }
};

export const loadSplit = function () {
  if (localStorage.length === 0) return;
  state.savedSplits = Object.entries({ ...localStorage });
  console.log(state.savedSplits);
};
