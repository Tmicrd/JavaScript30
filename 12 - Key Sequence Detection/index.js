function randy(min, max) {
  return Math.floor(Math.random () * (max - min + 1)) + min;
}

function colorChange() {
  // document.body.style.background = 'rgb(' + randy(0, 255) + ',' + randy(0, 255) + ',' + randy(0, 255) + ')';
  document.body.style.background = `hsl(${randy(0, 360)}, 80%, 80%)`;
}

const pressed = [];
const secretCode = "magic";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);

  pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)) {
    console.log('bingo');
    cornify_add();
    colorChange();
  }

});


