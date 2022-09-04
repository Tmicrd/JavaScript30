// 1. get random letters
const letters = document.querySelector(".letters");
const getRandomLetters = document.querySelector(".get-random-btn");

getRandomLetters.addEventListener("click", function () {
  let randomLetters = "";

  for (var i = 0; i < 6; i++) {
    const str = "qwertyuiopasdfghjklzxcvbnm1234567890";
    randomLetters += str[getLetter(0, str.length - 1)];
  }

  function getLetter(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  letters.innerHTML = randomLetters;

  // 2. change string into array
  const arr = [];
  for (var i = 0; i < randomLetters.length; i++) {
    arr.push(randomLetters[i]);
  }

  const some = document.querySelector(".some");
  const every = document.querySelector(".every");
  const find = document.querySelector(".find");
  const findIndex = document.querySelector(".findIndex");
  const result = document.querySelector(".result");

  function clickSome() {
    result.style.display = "block";
    result.innerHTML = arr.some(arr => arr.includes(3))
    console.log(arr)
  }

  function clickEvery() {
    result.style.display = "block";
    result.innerHTML = arr.every(arr => isNaN(Number(arr)))
  }

  function clickFind() {
    result.style.display = "block";
    result.innerHTML = arr.find(arr => arr == 'u') 
  }

  function clickFindIndex() {
    result.style.display = "block";
    result.innerHTML = arr.findIndex(arr => arr == "u") 
  }

  some.addEventListener("click", clickSome);
  every.addEventListener("click", clickEvery);
  find.addEventListener("click", clickFind);
  findIndex.addEventListener("click", clickFindIndex);

  result.style.display = "none";
  result.innerHTML = "";
});
