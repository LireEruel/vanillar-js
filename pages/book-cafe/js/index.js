import login, { logout } from "./login.js";

const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");

let isLogined = localStorage.getItem("id") !== null;
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
const render = () => {
  if (isLogined) {
    loginBtn.style.display = "none";
    document.querySelector("#profileNoImg").style.display = "none";
  } else {
    logoutBtn.style.display = "none";
    document.querySelector("#profileImg").style.display = "none";
  }
};

render();
