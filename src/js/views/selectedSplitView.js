import savedSplitsView from './savedSplitsView.js';

class SelectedSplitView {
  _parentEl = document.querySelector('.selected_split_display');

  _generateHTML(split) {
    let html = '';
    split[1].forEach((time, i) => {
      if (time.city) return;
      if (i === split[1].length - 1) return;
      const formattedTime = `<li>${time.minTens}${time.minOnes}:${time.secTens}${time.secOnes}.${time.secTenths}${time.secHundreths}</li>`;
      html += formattedTime;
      console.log(html);
    });
    return html;
  }

  displaySelectedSplit(split) {
    this._parentEl.insertAdjacentHTML(
      'beforeend',

      `
        <div>Name: ${split[0]}</div>
          <ol class="selected_split_items">
            ${this._generateHTML(split)}
          </ol>
      `
    );
  }
}

export default new SelectedSplitView();
