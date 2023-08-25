function clock() {
  let hour = document.getElementById("hours");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";
const h = hours % 12 === 0 ? 12 : hours % 12;
  if (h > 12) {
    h = h - 12;
    am = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  ampm.innerHTML = am;
}

clock();

let interval = setInterval(clock, 1000);
