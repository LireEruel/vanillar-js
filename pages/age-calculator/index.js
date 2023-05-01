class ageCalculator {
  constructor() {
    this.render();
  }
  render() {
    this.$submitBtn = document.querySelector("#submitBtn");
    this.$submitBtn.addEventListener("click", (e) => this.onClickSubmitBtn(e));
    document
      .querySelector("form")
      .addEventListener("submit", (e) => this.onClickSubmitBtn(e));
  }
  onClickSubmitBtn(e) {
    let input_day = document.querySelector("#day").value;
    let input_month = document.querySelector("#month").value;
    let input_year = document.querySelector("#year").value;

    if (this.validateDateInput(input_day, input_month, input_year)) {
      e.preventDefault();
      this.calculate(input_day, input_month, input_year);
    } else {
      console.log("날짜가 잘못됨.");
    }
  }
  validateDateInput(inputDay, inputMonth, inputYear) {
    let valid = false;

    const inputDate = dayjs(`${inputYear}-${inputMonth}-${inputDay}`);
    if (dayjs(`${inputYear}-${inputMonth}-${inputDay}`).isValid()) {
      valid = true;
      if (inputYear < 100) {
        //console.log("weired year");
        valid = false;
        this.setError("fieldsetYear", "year", "Must be a valid year");
      } else {
        this.setValid("fieldsetYear", "year");
      }
      if (inputMonth < 1 || inputMonth > 12) {
        // console.log("weired month");
        valid = false;
        this.setError("fieldsetMonth", "month", "Must be a valid month");
      } else {
        this.setValid("fieldsetMonth", "month");
      }
      if (inputDate.date() !== +inputDay) {
        //  console.log(inputDate, inputDate.date(), +inputDay);
        valid = false;
        this.setError("fieldsetDay", "day", "Must be a valid day");
      } else {
        this.setValid("fieldsetDay", "day");
      }
    }
    if (!inputDate.isBefore(dayjs())) {
      valid = false;
      const now = dayjs();
      if (inputYear > now.year()) {
        this.setError("fieldsetYear", "year", "Must be in the past");
      } else if (inputMonth > now.month()) {
        this.setError("fieldsetMonth", "month", "Must be in the past");
      } else {
        this.setError("fieldsetDay", "day", "Must be in the past");
      }
      // console.log("inputDate.isBefore(dayjs())");
    }

    return valid;
  }

  calculate(input_day, input_month, input_year) {
    console.log(input_day, input_month, input_year);
    if (input_day && input_month && input_year) {
      const now = dayjs();
      now.format();
      const diffYears = now.get("y") - input_year; // 날짜 차이 계산
      const diffMonths =
        now.get("M") > input_month
          ? now.get("M") - input_month
          : now.get("M") + 12 - input_month;
      const diffDays =
        now.get("D") > input_day
          ? now.get("D") - input_day
          : now.get("D") +
            this.getMonthLastDay(input_year, input_month) -
            input_day;
      console.log(now.get("D"), diffDays, diffMonths, diffYears);
      document.getElementById("yearsValue").textContent = diffYears;
      document.getElementById("monthsValue").textContent = diffMonths;
      document.getElementById("daysValue").textContent = diffDays;
    } else {
      console.log("날짜가 잘못됨.");
    }
  }

  setError(fieldsetId, inputId, errorMessage) {
    const $input = document.getElementById(inputId);
    const fieldsetElement = document.getElementById(fieldsetId);
    $input.setCustomValidity(errorMessage);
    $input.setAttribute("invalid", true);
    fieldsetElement.classList.add("error-fieldset");
    const lastChild = fieldsetElement.lastElementChild;
    lastChild.textContent = errorMessage;
  }
  setValid(fieldsetId, inputId) {
    const $input = document.getElementById(inputId);
    const fieldsetElement = document.getElementById(fieldsetId);
    $input.removeAttribute("invalid");
    fieldsetElement.classList.remove("error-fieldset");
    const lastChild = fieldsetElement.lastElementChild;
    lastChild.textContent = "";
  }
  getMonthLastDay(year, month) {
    let answer = 0;
    if (month == 2) {
      if (!(year % 4) && !(year % 100) && !(year % 400)) {
        answer = 29;
      } else {
        answer = 28;
      }
    } else if (month < 8) {
      if (month % 2) {
        answer = 31;
      } else {
        answer = 30;
      }
    } else {
      if (month % 2) {
        answer = 30;
      } else {
        answer = 31;
      }
    }
    return answer;
  }
}

new ageCalculator();
