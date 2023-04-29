let yearsEl = document.getElementById("years");
let monthsEl = document.getElementById("months");
let weeksEl = document.getElementById("weeks");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let messageEl = document.getElementById("message");

alert("Are u ready to accept ur fate? \n ");

let timer;

let year = 0;
let month = 0;
let week = 0;
let day = 0;
let hour = 0;
let minute = 0;
let second = 0;

function genRanNum() {
  const returnedYear = Math.floor(Math.random() * 60) + 1;
  year = returnedYear;
  const returnedMonth = Math.floor(Math.random() * 11) + 1;
  month = returnedMonth;
  const returnedWeek = Math.floor(Math.random() * 3) + 1;
  week = returnedWeek;
  const returnedDay = Math.floor(Math.random() * 6) + 1;
  day = returnedDay;
  const returnedHour = Math.floor(Math.random() * 23) + 1;
  hour = returnedHour;
  const returnedMinute = Math.floor(Math.random() * 59) + 1;
  minute = returnedMinute;
  const returnedSecond = Math.floor(Math.random() * 59) + 1;
  second = returnedSecond;
}

(function () {
  genRanNum();

  timer = setInterval(() => {
    yearsEl.innerHTML = "Years: " + year;
    monthsEl.innerHTML = "Month: " + month;
    weeksEl.innerHTML = "Weeks: " + week;
    daysEl.innerHTML = "Days: " + day;
    hoursEl.innerHTML = "Hours: " + hour;
    minutesEl.innerHTML = "Minutes: " + minute;
    secondsEl.innerHTML = "Seconds: " + second;
    if (
      year == 0 &&
      month == 0 &&
      week == 0 &&
      day == 0 &&
      hour == 0 &&
      minute == 0 &&
      second == 0
    ) {
      messageEl.style.opacity = 1;
      return;
    }
    if (second == 0) {
      second = 60;
      minute--;
      if (minute == 0) {
        minute = 60;
        hour--;
        if (hour == 0) {
          hour = 24;
          day--;
          if (day == 0) {
            day = 7;
            week--;
            if (week == 0) {
              week = 4;
              month--;
              if (month == 0) {
                month = 12;
                year--;
              }
            }
          }
        }
      }
    } else {
      second--;
    }
  }, 1000);
})();
