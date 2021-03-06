'use strict';

export const state = {
  clock: {
    secTenths: 0,
    secHundreths: 0,
    secOnes: 0,
    secTens: 0,
    minOnes: 0,
    minTens: 0,
  },
  splitCounter: 0,
  savedSplits: [],
  splitArr: [],
  location: [],
};

export const incrementTimer = function () {
  state.clock.secHundreths += 1;
  if (state.clock.secHundreths === 10) {
    state.clock.secTenths += 1;
    state.clock.secHundreths = 0;
  }
  if (state.clock.secTenths === 10) {
    state.clock.secOnes += 1;
    state.clock.secTenths = 0;
  }
  if (state.clock.secOnes === 10) {
    state.clock.secTens += 1;
    state.clock.secOnes = 0;
  }
  if (state.clock.secTens === 6) {
    state.clock.secTens = 0;
    state.clock.minOnes += 1;
  }
};

export const resetTimer = function () {
  Object.keys(state.clock).forEach(key => (state.clock[key] = 0));
};

export const updateSplitCount = function (type) {
  if (type === 'increase') state.splitCounter += 1;
  if (type === 'reset') state.splitCounter = 0;
};

export const pushSplit = async function (split) {
  state.splitArr.push({ ...split });
};

export const clearSplits = () => (state.splitArr = []);

export const saveSplit = function (splitName) {
  if (state.splitArr.length === 0) return;
  try {
    state.splitArr.push(_getDateTimeOfSave());
    localStorage.setItem(splitName, JSON.stringify(state.splitArr));
  } catch (err) {
    throw new Error('Storage is full. Please delete splits to save new ones.');
  }
};

export const loadSplit = function () {
  if (localStorage.length === 0) return;
  const rawSavedSplits = Object.entries({ ...localStorage });
  rawSavedSplits.forEach(split => {
    split[1] = JSON.parse(split[1]);
  });
  state.savedSplits = rawSavedSplits;
};

const _getDateTimeOfSave = function () {
  const now = new Date().toString().split(' ');
  return {
    date: `${now[2]} ${now[1]} ${now[3]}: ${now[4].slice(0, 5)}hr`,
  };
};

const _getLocation = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const revGeoCoding = async function () {
  const curLocation = await _getLocation();
  const { latitude: lat, longitude: lng } = curLocation.coords;

  const revGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=169542281086562212905x84985`
  );
  const geoJSON = await revGeo.json();
  state.splitArr.push({
    location: `${
      geoJSON.city.slice(0, 1).toUpperCase() +
      geoJSON.city.slice(1).toLowerCase()
    }, ${geoJSON.state.toUpperCase()}`,
  });
};
