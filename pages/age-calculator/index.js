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
    e.preventDefault();

    let input_day = document.querySelector("#day").value;
    let input_month = document.querySelector("#month").value;
    let input_year = document.querySelector("#year").value;

    if (this.validateDateInput(input_day, input_month, input_year)) {
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

  calculate(input_year, input_month, input_day) {
    let $yearsValue = document.getElementById("yearsValue");
    let $monthsValue = document.getElementById("monthsValue");
    let $daysValue = document.getElementById("daysValue");
    console.log(input_day, input_month, input_year);
    if (input_day && input_month && input_year) {
      const now = dayjs();
      now.format();
      let inputDate = dayjs(`${input_year}-${input_month}-${input_day}`);
      console.log(inputDate);
      const diffYears = now.diff(inputDate, "year"); // 날짜 차이 계산

      const diffMonths = now.diff(inputDate, "month") % 12;
      console.log(now.diff(inputDate, "month"));
      inputDate = inputDate.add(now.diff(inputDate, "month"), "month");

      const diffDays = now.diff(inputDate, "day");
      console.log(diffDays, diffMonths, diffYears);
      $yearsValue.textContent = diffYears;
      $monthsValue.textContent = diffMonths;
      $daysValue.textContent = diffDays;
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
}

new ageCalculator();
