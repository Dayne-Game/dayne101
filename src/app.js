require("./styles/style.css");
require("./scripts/script.js");

let h1 = document.querySelectorAll("h1");
h1[0].innerHTML = `Hello ${process.env.ENV1}`;

fetch(
  `https://api.github.com/users/jwknz/repos?per_page=100&token=${
    process.env.GHT1
  }`
)
  .then(response => response.json())
  .then(data => console.log(data));
