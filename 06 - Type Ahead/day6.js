const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
// const prom = fetch(endpoint);
// console.log(prom); //  fetch() returns a promise

// 1. get data

fetch(endpoint)
  .then((blob) => blob.json())
  // .then((data) => console.log(data));
  .then((data) => cities.push(...data));

// 2. get functionalities and create HTML

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);

  const html = matchArray
    .map((place) => {
<<<<<<< HEAD

      const regex = new RegExp(this.value, "gi");

      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
=======
      const regex = new RegExp(this.value, "gi");

      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
>>>>>>> main

      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        <li/>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
<<<<<<< HEAD
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
=======
>>>>>>> main
}

// 3. hook up to addEverntListner
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
