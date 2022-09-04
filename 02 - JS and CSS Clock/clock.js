// background
setInterval(() => {
  document.body.style.background =
    "rgb(" + getNum(0, 255) + "," + getNum(0, 255) + "," + getNum(0, 255) + ")";
}, 1000);

function getNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}

// clock hands
setInterval(setDate, 1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setDate() {
  const time = new Date();
//   second hand
  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//   minute hand   
  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 - 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
//   hour hand
  const hours = time.getHours();
  const hoursDegrees = (hours / 120) * 360 - 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
