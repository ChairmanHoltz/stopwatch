class SplitView {
  counter = 0;

  displaySplit(time) {
    this.counter += 1;
    const splitDisplay = document.querySelector('.split_display');
    splitDisplay.classList.remove('fade-out-text');
    splitDisplay.classList.add('fade-in-text');
    splitDisplay.textContent = `Split ${this.counter}: ${time.minTens}${time.minOnes}:${time.secTens}${time.secOnes}:${time.secTenths}${time.secHundreths}`;
    setTimeout(function () {
      splitDisplay.classList.add('fade-out-text');
    }, 1500);
  }
}

export default new SplitView();
