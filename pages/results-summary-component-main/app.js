class App {
  constructor($body) {
    this.$body = $body;
    this.render();
    this.show_summary = true;
  }
  async render() {
    const $ul = document.querySelector("ul");

    const $right_card_title = document.querySelector(
      "#resultSummaryComponentMain > div.summary-side > h3"
    );
    this.renderSummary($ul, $right_card_title);
    const $button = document.querySelector("button");
    $button.addEventListener("click", () => {
      this.show_summary = !this.show_summary;
      if (this.show_summary) {
        this.renderSummary($ul, $right_card_title);
        $button.textContent = "Continue";
      } else {
        this.renderWhatILearned($ul, $right_card_title);
        $button.textContent = "Back";
      }
    });
  }

  async renderSummary($ul, $title) {
    $ul.innerHTML = "";
    $title.textContent = "Summary";
    const scoreData = await this.getScoreData();
    for (const score of scoreData) {
      const $li = document.createElement("li");
      const $h4 = document.createElement("h4");
      const $h5 = document.createElement("h5");
      const $span = document.createElement("span");

      $ul.appendChild($li);
      $li.appendChild($h4);
      $li.appendChild($h5);
      $h5.appendChild($span);

      $li.classList = "summary-box " + score.category.toLowerCase();
      $h4.textContent = score.category;
      $span.textContent = score.score;
      $h5.appendChild(document.createTextNode(" / 100"));
    }
  }

  renderWhatILearned($ul, $title) {
    $ul.innerHTML = "";
    $title.textContent = "What I Learned";

    const learned = [
      "Fetch JSON file and use.",
      "Set background with gradient.",
      "Change inner component contents.",
      "Append both the span and text node.",
    ];

    for (const learn of learned) {
      const $li = document.createElement("li");
      $li.textContent = learn;
      $ul.appendChild($li);
    }
  }

  async getScoreData() {
    let data;
    try {
      const res = await fetch("./data.json");
      data = await res.json();
    } catch (e) {
      data = [];
    }
    return data;
  }
}
export default App;
