class App {
  constructor($body) {
    this.$body = $body;
    this.render();
    this.student_id = 0;
  }
  async render() {
    const $summary_side = document.querySelector(".summary-side");
    const $ul = document.createElement("ul");
    const scoreData = await this.getScoreData();
    console.log(scoreData);
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
