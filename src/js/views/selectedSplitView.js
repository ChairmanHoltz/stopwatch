import savedSplitsView from './savedSplitsView.js';

class SelectedSplitView {
  _parentEl = document.querySelector('.selected_split_display');
  _selectedSplit = document.querySelector('.selected_split');

  _generateHTML(split) {
    let html = '';
    split[1].forEach((time, i) => {
      if (time.location) return;
      if (i === split[1].length - 1) return;
      const formattedTime = `<li>${time.minTens}${time.minOnes}:${time.secTens}${time.secOnes}.${time.secTenths}${time.secHundreths}</li>`;
      html += formattedTime;
    });
    return html;
  }

  displaySelectedSplit(split) {
    this._selectedSplit.innerHTML = '';
    this._selectedSplit.insertAdjacentHTML(
      'beforeend',

      `
        <div>Name: ${split[0]}</div>
        <div>Date: ${split[1][split[1].length - 1].date}</div>
        <div>Location: ${split[1][split[1].length - 2].location}</div>
          <ol class="selected_split_items">
            ${this._generateHTML(split)}
          </ol>
      `
    );
  }
}

export default new SelectedSplitView();
