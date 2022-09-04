const balloons = document.querySelectorAll(".balloon");

balloons.forEach((balloon) => {
  balloon.addEventListener("click", (e) => {
    balloon.classList.add("flyAway");
  });
  balloon.addEventListener("mouseover", (e) => {
    balloon.style.cursor = "pointer";
  });
});
