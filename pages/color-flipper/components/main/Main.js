class Main {
  constructor($body, mode, setNewBackgroundColor) {
    this.$body = $body;
    this.mode = mode;
    this.backgroundColor = "#F1f5f8";
    this.setNewBackgroundColor = setNewBackgroundColor;
    this.render();
  }

  setMode(mode) {
    this.mode = mode;
  }

  setBackgroundColor(color) {
    this.backgroundColor = color;
  }

  render() {
    console.log(this.mode);
    if (this.$body.children[3] !== undefined) {
      this.$body.removeChild(this.$body.children[3]);
    }
    this.$body.style.backgroundColor = this.backgroundColor;
    const main = document.createElement("main");
    this.main = main;
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const colorSpan = document.createElement("span");
    const button = document.createElement("button");

    main.appendChild(container);
    container.appendChild(h2);
    container.appendChild(button);

    container.setAttribute("class", "container");

    h2.textContent = "Background Color : ";

    button.textContent = "CLICK ME";
    h2.appendChild(colorSpan);
    colorSpan.textContent = this.backgroundColor;
    colorSpan.setAttribute("class", "color");

    button.addEventListener("click", () => {
      this.setNewBackgroundColor();
    });

    this.$body.appendChild(main);
  }
}

export default Main;
