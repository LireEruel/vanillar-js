let inputId = "";

export default function login() {
  Swal.fire({
    title: "아이디를 입력해주세요",
    input: "text",
    inputAttributes: {
      autocapitalize: "false",
    },
    showCancelButton: true,
    confirmButtonText: "ok",
    preConfirm: (_inputId) => {
      if (!_inputId) {
        Swal.showValidationMessage("한 글자 이상 입력해주세요.");
      } else {
        inputId = _inputId;
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      checkPw();
    }
  });
}

const checkPw = () => {
  Swal.fire({
    title: "비밀번호를 입력해주세요",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "login",
    preConfirm: (_inputPw) => {
      if (!_inputPw) {
        Swal.showValidationMessage("한 글자 이상 입력해주세요.");
      } else {
        localStorage.setItem("id", inputId);
        localStorage.setItem("pw", _inputPw);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "로그인 성공!!!",
      }).then(() => {
        window.location.reload();
      });
    }
  });
};

export const logout = () => {
  localStorage.clear();
  window.location.reload();
};
