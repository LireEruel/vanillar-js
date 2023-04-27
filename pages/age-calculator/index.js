class ageCalculator {
  constructor() {
    this.render();
  }
  render() {
    this.$submitBtn = document.querySelector("#submitBtn");
    this.$submitBtn.addEventListener("click", this.calculate);
  }
  calculate() {
    let input_day = document.querySelector("#day").value;
    let input_month = document.querySelector("#month").value;
    let input_year = document.querySelector("#year").value;

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
