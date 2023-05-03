class Crew {
  constructor() {
    this.render();
    this.destinations = [];
  }
  async render() {
    this.destinations = await this.getData();
    const $tabs = document.querySelector("ul");
    this.destinations.forEach((destination, index) => {
      const $li = document.createElement("li");
      $li.textContent = destination.name;
      $li.addEventListener("click", () => {
        this.setDestination(destination);
      });
      $tabs.appendChild($li);
    });
    this.setDestination(this.destinations[0]);
  }
  async getData() {
    let data;
    try {
      const res = await fetch("../data.json");
      data = await res.json();
      data = data.destinations;
    } catch (error) {
      data = [];
    }
    return data;
  }
  async setDestination(destination) {
    document.querySelector("h1").textContent = destination.name;
    document.querySelector("p").textContent = destination.description;
    document.querySelector("#distance").textContent = destination.distance;
    document.querySelector("#travel").textContent = destination.travel;
    document.querySelector("#targetImage").src = "../" + destination.images.png;
    [...document.querySelector("ul").children].forEach((tab) => {
      if (tab.textContent == destination.name) {
        tab.classList.add("selected");
      } else {
        tab.classList.remove("selected");
      }
    });
  }
}
new Crew();
