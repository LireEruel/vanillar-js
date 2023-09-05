export function addAnswer() {
  const answerList = document.getElementById("pollAnswerList");
  const answerWrap = document.createElement("div");
  answerWrap.className = "form-row";
  const input = document.createElement("input");
  const deleteBtn = document.createElement("input");
  input.classList.add("text-input");
  deleteBtn.type = "button";
  deleteBtn.value = "삭제";
  deleteBtn.addEventListener("click", () => {
    answerWrap.remove();
  });

  answerWrap.appendChild(input);
  answerWrap.appendChild(deleteBtn);
  answerList.appendChild(answerWrap);
  console.log(document.getElementById("addVoteForm"));
  console.log(answerList);
}

export function addVote(event) {
  console.log(event);
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log(formData);
  const votedata = {};
  votedata.startDate = formData.get("startDate");
  votedata.endDate = formData.get("endDate");
  votedata.question = formData.get("question");
  votedata.answerList = [];
  console.log(votedata);
  const answerListElement = document.getElementById("pollAnswerList").children;
  for (let i = 0; i < answerListElement.length; i++) {
    const value = answerListElement[i].children[0].value;
    if (value) {
      votedata.answerList.push(answerListElement[i].children[0].value);
    }
  }

  if (
    votedata.startDate &&
    votedata.endDate &&
    votedata.question &&
    votedata.answerList.length
  ) {
    Swal.fire({
      icon: "success",
      title: "투표 생성 성공",
    });
    localStorage.setItem("poll", JSON.stringify(votedata));
    window.close();
  } else {
    Swal.fire({
      icon: "error",
      title: "투표 생성 실패",
    });
  }
}
