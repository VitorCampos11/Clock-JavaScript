function clock() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = String(h).padStart(2, "0").split(" ");
  m = String(m).padStart(2, "0").split(" ");
  s = String(s).padStart(2, "0").split(" ");
  //convert 24hour time 12 hour with AM PM indicator
  if (h < 12) {
    ampm.innerHTML = "AM";
  } else {
    ampm.innerHTML = "PM";
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  console.log(s);
}
var interval = setInterval(clock, 1);
