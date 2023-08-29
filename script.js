function clock() {
  let hour = document.getElementById("hours");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // Determine if it's AM or PM
  const amOrPm = h >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  let formattedHours = h % 12 === 0 ? 12 : hours % 12;

  if (formattedHours < 10) {
    formattedHours = "0" + formattedHours;
  }

  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hour.innerHTML = formattedHours;
  minute.innerHTML = m;
  second.innerHTML = s;
  ampm.innerHTML = amOrPm;
}

clock();

let interval = setInterval(clock, 1000);
