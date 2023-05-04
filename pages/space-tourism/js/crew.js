class Crew {
  constructor() {
    this.render();
    this.crews = [];
  }
  async render() {
    this.crews = await this.getData();
    const $indecator = document.querySelector("#indecators");
    this.crews.forEach((crew, index) => {
      const $li = document.createElement("li");
      $li.addEventListener("click", () => {
        this.setCrew(crew, index);
      });
      $indecator.appendChild($li);
    });
    this.setCrew(this.crews[0], 0);
  }
  async getData() {
    let data;
    try {
      const res = await fetch("../data.json");
      data = await res.json();
      data = data.crew;
    } catch (error) {
      data = [];
    }
    return data;
  }
  async setCrew(crew, currentIndex) {
    document.querySelector("#role").textContent = crew.name;
    document.querySelector("#name").textContent = crew.name;
    document.querySelector("#bio").textContent = crew.bio;
    document.querySelector("#targetImage").src = "../" + crew.images.png;
    [...document.querySelector("#indecators").children].forEach(
      (tab, index) => {
        if (currentIndex == index) {
          tab.classList.add("selected");
        } else {
          tab.classList.remove("selected");
        }
      }
    );
  }
}
new Crew();
