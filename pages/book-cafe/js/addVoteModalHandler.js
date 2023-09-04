const answerList = document.getElementById("answerList");
const addAnswerBtn = document.getElementById("addAnswerBtn");
const openCenteredWindow = (url, title, w, h) => {
  // 화면의 너비와 높이를 가져옵니다.
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // 새 창이 화면 중앙에 나타나도록 위치를 계산합니다.
  const left = (screenWidth - w) / 2;
  const top = (screenHeight - h) / 2;

  // 새 창을 엽니다.
  return window.open(
    url,
    title,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
  );
};

export const openVoteModal = () => {
  openCenteredWindow("./modal/addVoteModal.html", "a", 400, 400);
};

function addAnswer() {
  const answerWrap = document.createElement("div");
  answerWrap.className = "form-row";
  const input = document.createElement("input");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.addEventListener("click", () => {
    answerWrap.remove();
  });
  answerWrap.appendChild(input);
  answerWrap.appendChild(deleteBtn);
  answerList.appendChild(answerWrap);
}
if (addAnswerBtn) {
  addAnswerBtn.addEventListener("click", addAnswer);
}

const addVoteForm = document.getElementById("addVoteForm");

if (addVoteForm) {
  document
    .getElementById("addVoteForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);
      const startDate = formData.get("startDate");
      const endDate = formData.get("endDate");
      const question = formData.get("question");
      const answerList = [];
      const answerListElement = document.getElementById("answerList").children;
      for (let i = 0; i < answerListElement.length; i++) {
        const value = answerListElement[i].children[0].value;
        if (value) {
          answerList.push(answerListElement[i].children[0].value);
        }
      }
      console.log(startDate, endDate, question, answerList);
    });
}
