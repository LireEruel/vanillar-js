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
  validateDateInput(inputYear, inputMonth, inputDay) {
    let valid = true;
    const input_date = dayjs(`${inputYear}-${inputMonth}-${inputDay}`);
    if (!input_date.isValid()) {
      valid = false;
      console.log("!input_date.isValid()");
    } else if (!input_date.isBefore(dayjs())) {
      console.log("input_date.isBefore(dayjs())");
      valid = false;
    }
    return valid;
  }

  calculate(input_year, input_month, input_day) {
    let $yearsValue = document.querySelector("#yearsValue");
    let $monthsValue = document.querySelector("#monthsValue");
    let $daysValue = document.querySelector("#daysValue");
    if (input_day && input_month && input_year) {
      const now = dayjs();
      now.format();
      let inputDate = dayjs(`${input_year}-${input_month}-${input_day}`);
      const diffYears = now.diff(inputDate, "year"); // 날짜 차이 계산
      const diffMonths = now.diff(inputDate, "month") % 12;
      if (inputDate.isBefore(now)) {
        inputDate = inputDate.add(now.diff(inputDate, "month"), "month");
      } else {
        inputDate = inputDate.subtract(now.diff(inputDate, "month"), "month");
      }
      const diffDays = now.diff(inputDate, "day");
      $yearsValue.textContent = diffYears;
      $monthsValue.textContent = diffMonths;
      $daysValue.textContent = diffDays;
    } else {
      console.log("날짜가 잘못됨.");
    }
  }
}

new ageCalculator();
