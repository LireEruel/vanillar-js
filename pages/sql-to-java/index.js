const textArea = document.getElementById("textArea");
const resultArea = document.getElementById("resultArea");
const sqlBuildeBtn = document.getElementById("sqlBuildeBtn");
const htmlBuildeBtn = document.getElementById("htmlBuildeBtn");

sqlBuildeBtn.addEventListener("click", () => {
  const inputText = textArea.value;
  let replacedText = inputText.replace(/"/g, "'");
  replacedText = replacedText.replace(/;/g, "");
  const inputTextList = replacedText.split("\n");
  let outputText = "";
  for (let i = 0; i < inputTextList.length; i++) {
    outputText +=
      'StringBuilder sql = new StringBuilder("' + inputTextList[i] + '\\n");\n';
  }
  resultArea.value = outputText;
});

htmlBuildeBtn.addEventListener("click", () => {
  const inputText = textArea.value;
  resultArea.value = inputText.replace(/["']/g, '\\"');
});
