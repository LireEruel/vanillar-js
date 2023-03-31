let inputText = document.getElementById("input");
document.addEventListener("keydown", (e) => {
  onKeyDowm(e.key);
});
function onKeyDowm(inputKeyValue) {
  switch (inputKeyValue) {
    case "Backspace":
      Back();
      break;
    case "Enter":
      Result();
      break;
    case "Escape":
      Clear();
      break;
    case "x":
      Solve("X");
      break;
    case "X":
      Solve("X");
      break;
    case "*":
      Solve("X");
    default:
      Solve(inputKeyValue);
  }
}
const Clear = () => {
  inputText.value = "";
};
function Back() {
  if (inputText.value.length > 0) {
    inputText.value = inputText.value.slice(0, -1);
    console.log(inputText.value);
  }
}

const Solve = (input) => {
  if (isNatualNumber(input)) {
    inputText.value += input;
    return;
  }
  switch (input) {
    case "%":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    case "/":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    case "X":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    case "-":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    case "+":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    case "00":
      if (
        inputText.value[inputText.value.length - 1] == "." ||
        isNatualNumber(inputText.value[inputText.value.length - 1])
      ) {
        inputText.value += input;
      } else {
        inputText.value += "0";
        inputText.value += ".";
      }
      break;

    case "0":
      if (
        inputText.value[inputText.value.length - 1] == "." ||
        isNatualNumber(inputText.value[inputText.value.length - 1])
      ) {
        inputText.value += input;
      } else {
        inputText.value += input;
        inputText.value += ".";
      }
      break;

    case ".":
      if (isNatualNumber(inputText.value[inputText.value.length - 1])) {
        inputText.value += input;
      } else {
        alert("올바르지 않은 식 입니다.");
      }
      break;

    default:
      break;
  }
};

function isNatualNumber(char) {
  const num = parseInt(char);
  if (num > -1 && num < 10) return true;
  else return false;
}

function Result() {
  if (!isNatualNumber(inputText.value[inputText.value.length - 1])) {
    alert("올바르지 않은 식 입니다.");
    return;
  }
  let formula = [...inputText.value];
  const postfix = []; // 후위표기식
  const infix = []; // 중위표기식
  const compute_stack = [];

  const operator_stack = [];
  let number = "";
  // 숫자와 연산자로 분리해서 infix에 저장
  formula.map((char) => {
    if (isNatualNumber(char) || char == ".") {
      number += char;
    } else {
      infix.push(parseFloat(number));
      number = "";
      infix.push(char);
    }
  });
  infix.push(parseFloat(number));
  console.log("중위 연산식 : " + infix);

  // 후위 연산식으로 변환
  infix.map((value) => {
    if (typeof value == "number") {
      // 숫자는 바로 넣어주기
      postfix.push(value);
    } else {
      if (operator_stack.length == 0) {
        operator_stack.push(value);
      } else {
        while (
          getPriority(operator_stack[operator_stack.length - 1]) >=
          getPriority(value)
        ) {
          console.log(operator_stack);
          postfix.push(operator_stack.pop());
          if (operator_stack.length == 0) break;
        }
        operator_stack.push(value);
      }
    }
  });
  while (operator_stack.length > 0) {
    postfix.push(operator_stack.pop());
  }
  console.log("후위연산식 " + postfix);

  // stack에 넣으면서 계산하기

  postfix.map((value) => {
    console.log(compute_stack);
    if (typeof value == "number") {
      // 숫자는 바로 넣어주기
      compute_stack.push(value);
    } else {
      let memo = 0;
      let right = compute_stack.pop();
      let left = compute_stack.pop();

      switch (value) {
        case "X":
          memo = left * right;
          compute_stack.push(memo);
          break;
        case "/":
          memo = left / right;
          compute_stack.push(memo);
          break;
        case "-":
          memo = left - right;
          compute_stack.push(memo);
          break;
        case "+":
          memo = left + right;
          compute_stack.push(memo);
          break;
        case "%":
          memo = left % right;
          compute_stack.push(memo);
          break;
        default:
          break;
      }
    }
  });
  console.log(compute_stack);
  inputText.value = compute_stack[0];
}

function getPriority(operator) {
  if (operator == "X" || operator == "/" || operator == "%") {
    return 1;
  } else return 0;
}
