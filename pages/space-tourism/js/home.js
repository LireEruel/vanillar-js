class App {
  constructor() {
    this.render();
  }
  render() {
    const linkList = document.querySelector("ul");
    [...linkList.children].forEach((elem) => {
      if (elem.textContent == "HOME") {
        elem.firstChild.classList.add("selected");
      }
    });
    const $exploreBtn = document.querySelector(".explore-button");
    const $exploreBtnWrap = document.querySelector(".explore-button-wrap");
    $exploreBtn.addEventListener("mouseenter", () => {
      $exploreBtnWrap.classList.add("hovered");
    });
    $exploreBtn.addEventListener("mouseleave", () => {
      $exploreBtnWrap.classList.remove("hovered");
    });
    $exploreBtn.addEventListener("click", () => {
      window.location.replace("pages/destination.html");
    });
  }
}

new App();
