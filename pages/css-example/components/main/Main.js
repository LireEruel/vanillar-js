class Main {
  constructor($body) {
    this.$body = $body;
    this.render();
    this.boxCount = 0;
  }

  render() {
    const $main = document.createElement("main");

    const $btnGroup = document.createElement("div");
    const $addBoxButton = document.createElement("button");
    const $deleteBoxButton = document.createElement("button");
    const $containerLabel = document.createElement("h4");
    const $containerWrap = document.createElement("div");
    const $container = document.createElement("div");

    this.$body.appendChild($main);
    $main.appendChild($btnGroup);
    $btnGroup.appendChild($addBoxButton);
    $btnGroup.appendChild($deleteBoxButton);
    $main.appendChild($containerWrap);
    $containerWrap.appendChild($containerLabel);
    $containerWrap.appendChild($container);

    $containerWrap.className = "container-wrap";
    $containerLabel.textContent = "container";

    $addBoxButton.textContent = "add Box";
    $addBoxButton.addEventListener("click", () => this.addBox($container));
    $addBoxButton.className = "box-btn";

    $deleteBoxButton.textContent = "delete Box";
    $deleteBoxButton.addEventListener("click", () =>
      this.deleteBox($container)
    );
    $deleteBoxButton.className = "box-btn";

    $container.className = "container";
  }

  addBox($container) {
    const $box = document.createElement("div");
    $box.textContent = "Box" + this.boxCount;
    $box.className = "box";
    $container.appendChild($box);
    this.boxCount++;
  }

  deleteBox($container) {
    const lastChild = $container.lastElementChild;
    if (lastChild) {
      $container.removeChild(lastChild);
    }
  }
}

export default Main;
