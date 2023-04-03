class App {
  constructor($body) {
    this.$body = $body;
    this.render();
    this.student_id = 0;
  }
  async render() {
    const $ul = document.querySelector("ul");
    const scoreData = await this.getScoreData();
    console.log(scoreData);
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
