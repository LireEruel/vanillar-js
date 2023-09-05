import login, { logout } from "./login.js";
import { openVoteModal } from "./addVoteModalHandler.js";
import "./vote.js";

const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const menuFoldBtn = document.querySelector("#menuFoldBtn");
const manageBtn = document.getElementById("manageBtn");
manageBtn.addEventListener("click", openVoteModal);
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

let isOpened = true;
const sideMenuSubMenuList = document.getElementsByClassName(
  "side-menu-sub-title"
);
const sideMenuSubItemsList = document.getElementsByClassName(
  "side-menu-sub-items"
);

const checkMenuFoldState = () => {
  let foldCount = 0;
  for (let i = 0; i < 4; i++) {
    if (sideMenuSubItemsList[i].style.display === "none") {
      foldCount++;
    }
  }
  if (foldCount === 0) {
    isOpened = true;
    menuFoldBtn.innerHTML = "전국매장접기";
  } else if (foldCount === 4) {
    isOpened = false;
    menuFoldBtn.innerHTML = "전국매장펼치기";
  }
};

for (let i = 0; i < sideMenuSubMenuList.length; i++) {
  sideMenuSubMenuList[i].addEventListener("click", () => {
    sideMenuSubItemsList[i].style.display =
      sideMenuSubItemsList[i].style.display === "none" ? "block" : "none";
    checkMenuFoldState();
  });
}

menuFoldBtn.addEventListener("click", () => {
  if (isOpened) {
    isOpened = false;
    menuFoldBtn.innerHTML = "전국매장펼치기";
    for (let i = 0; i < sideMenuSubItemsList.length; i++) {
      sideMenuSubItemsList[i].style.display = "none";
    }
  } else {
    isOpened = true;
    menuFoldBtn.innerHTML = "전국매장접기";
    for (let i = 0; i < sideMenuSubItemsList.length; i++) {
      sideMenuSubItemsList[i].style.display = "block";
    }
  }
});
render();
