class technology {
  constructor() {
    this.render();
    this.technologies = [];
  }
  async render() {
    this.technologies = await this.getData();
    const $indecator = document.querySelector("ul");
    this.technologies.forEach((technology, index) => {
      const $li = document.createElement("li");
      $li.textContent = index + 1;
      $li.addEventListener("click", () => {
        this.setTechnology(technology);
      });
      $indecator.appendChild($li);
    });
    this.setTechnology(this.technologies[0]);
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
  setTechnology(technology) {
    document.querySelector("#name").textContent = technology.name;
    document.querySelector("#description").textContent = technology.description;
    document.querySelector("#targetImage").src =
      "../" + technology.images.portrait;
    const currentIndex = this.technologies.findIndex(
      (c) => c.name === technology.name
    );
    [...document.querySelector("ul").children].forEach((tab, index) => {
      if (currentIndex == index) {
        tab.classList.add("selected");
      } else {
        tab.classList.remove("selected");
      }
    });
  }
}
new technology();
