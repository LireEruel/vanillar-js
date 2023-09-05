const pollData = JSON.parse(localStorage.getItem("poll"));
const selectForm = document.getElementById("selectForm");
if (pollData) {
  document.getElementById("formWrap").classList.remove("empty-poll");
  document.getElementById("formTitle").innerText = pollData.question;
  document.getElementById(
    "pollRange"
  ).innerText = `투표기간 : ${pollData.startDate} ~ ${pollData.endDate}`;
  const answerList = document.getElementById("answerList");
  pollData.answerList.forEach((answer) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "radio";
    input.name = "poll";
    input.id = answer;
    label.for = answer;
    label.innerText = answer;
    li.appendChild(input);
    li.appendChild(label);
    answerList.appendChild(li);
  });
} else {
  if (!document.getElementById("formWrap").classList.contains("empty-poll")) {
    document.getElementById("formWrap").classList.add("empty-poll");
  }
}
