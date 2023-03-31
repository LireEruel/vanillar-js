class Header {
  constructor($body, setMode) {
    this.$body = $body;
    this.setMode = setMode;
    this.render();
  }

  render() {
    const nav = document.createElement("nav");
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const ul = document.createElement("ul");

    nav.appendChild(div);
    div.appendChild(h4);
    div.appendChild(ul);

    nav.setAttribute("class", "nav");
    div.setAttribute("class", "nav-center");

    h4.textContent = "Color Flipper";
    h4.setAttribute("class", "title");

    this.addListItem(ul, "Simple", true);
    this.addListItem(ul, "Hex", false);

    this.$body.appendChild(nav);
  }

  addListItem(ul, text, mode) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(anchor);
    li.addEventListener("click", () => {
      this.setMode(mode);
    });
    anchor.textContent = text;
  }
}

export default Header;
