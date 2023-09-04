import login, { logout } from "./login.js";

const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const menuFoldBtn = document.querySelector("#menuFoldBtn");
const sideMenuWrap = document.querySelector("#sideMenuWrap");

let isLogined = localStorage.getItem("id") !== null;
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
const render = () => {
  if (isLogined) {
    loginBtn.style.display = "none";
    document.querySelector("#profileNoImg").style.display = "none";
    document.querySelector("#signUpBtn").style.display = "none";
  } else {
    logoutBtn.style.display = "none";
    document.querySelector("#profileImg").style.display = "none";
    document.querySelector("#myPageBtn").style.display = "none";
    document.querySelector("#manageBtn").style.display = "none";
  }
};

let isOpened = false;
const sideMenuSubMenuList = document.getElementsByClassName(
  "side-menu-sub-title"
);
const sideMenuSubItemsList = document.getElementsByClassName(
  "side-menu-sub-items"
);
for (let i = 0; i < sideMenuSubMenuList.length; i++) {
  sideMenuSubMenuList[i].addEventListener("click", () => {
    sideMenuSubItemsList[i].style.display =
      sideMenuSubItemsList[i].style.display === "none" ? "block" : "none";
  });
}

menuFoldBtn.addEventListener("click", () => {
  console.log(sideMenuSubItemsList);
  if (isOpened) {
    isOpened = false;
    for (let i = 0; i < sideMenuSubItemsList.length; i++) {
      sideMenuSubItemsList[i].style.display = "none";
    }
  } else {
    isOpened = true;
    for (let i = 0; i < sideMenuSubItemsList.length; i++) {
      sideMenuSubItemsList[i].style.display = "block";
    }
  }
});
render();
