import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import colorFlip from "./util/colorFlip.js";

let isSimpleMode = true;

const setMode = (mode) => {
  isSimpleMode = mode;
  main.setMode(mode);
  setNewBackgroundColor();
};

function setNewBackgroundColor() {
  const newColor = colorFlip(isSimpleMode);
  main.setBackgroundColor(newColor);
  main.render(isSimpleMode);
}

new Header(document.querySelector("body"), setMode);
const main = new Main(
  document.querySelector("body"),
  isSimpleMode,
  setNewBackgroundColor
);
