class technology {
  constructor() {
    this.render();
    this.technologies = [];
  }
  async render() {
    this.technologies = await this.getData();
    const $indecator = document.querySelector("#indecators");
    this.technologies.forEach((technology, index) => {
      const $li = document.createElement("li");
      $li.textContent = index + 1;
      $li.addEventListener("click", () => {
        this.setTechnology(technology, index);
      });
      $indecator.appendChild($li);
    });
    this.setTechnology(this.technologies[0], 0);
  }
  async getData() {
    let data;
    try {
      const res = await fetch("../data.json");
      data = await res.json();
      data = data.technology;
    } catch (error) {
      data = [];
    }
    return data;
  }
  setTechnology(technology, currentIndex) {
    document.querySelector("#name").textContent = technology.name;
    document.querySelector("#description").textContent = technology.description;
    document.querySelector("#targetImage").src =
      "../" + technology.images.portrait;
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
new technology();
