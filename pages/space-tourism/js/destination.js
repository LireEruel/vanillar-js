class Destination {
  constructor() {
    this.render();
    this.destinations = [];
  }
  async render() {
    const linkList = document.querySelector("ul");
    [...linkList.children].forEach((elem) => {
      if (elem.textContent == "DESTINATION") {
        elem.firstChild.classList.add("selected");
      }
    });
    this.destinations = await this.getData();
    const $tabs = document.querySelector("#tabs");
    this.destinations.forEach((destination, index) => {
      const $li = document.createElement("li");
      $li.textContent = destination.name;
      $li.addEventListener("click", () => {
        this.setDestination(destination, index);
      });
      $tabs.appendChild($li);
    });
    this.setDestination(this.destinations[0], 0);
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
  async setDestination(destination, currentIndex) {
    document.querySelector("h1").textContent = destination.name;
    document.querySelector("p").textContent = destination.description;
    document.querySelector("#distance").textContent = destination.distance;
    document.querySelector("#travel").textContent = destination.travel;
    document.querySelector("#targetImage").src = "../" + destination.images.png;
    [...document.querySelector("#tabs").children].forEach((tab, index) => {
      if (currentIndex == index) {
        tab.classList.add("selected");
      } else {
        tab.classList.remove("selected");
      }
    });
  }
}
new Destination();
