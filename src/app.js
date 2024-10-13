/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function dominiogenerador() {
  let random = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        random += pronoun[i] + adj[a] + noun[b] + ".com<br>";
      }
    }
  }
  return random;
}

window.onload = function() {
  console.log(dominiogenerador());
  let generador = document.getElementById("generador");
  generador.innerHTML = dominiogenerador();
};
