"use strict";

// import { numberGenerator } from "./numberGenerator";

const el2 = document.querySelectorAll(".response");

/* function risposta() {
  for (let i = 0; i < el2.length; i++) {
    el2[i].addEventListener("click", function () {
      alert("ok");
    });
  }
}

 risposta(); */

// IIFE - Immediately Invoked Function Expression
// equivalente alla porzione di codice appena sopra; equivale a dichiarare una funzione ed invocarla

(() => {
  for (let i = 0; i < el2.length; i++) {
    el2[i].addEventListener("click", function () {
      let value = i + 1;
      alert(
        `hai selezionato la Risposta ${value} con valore = ${el2[i].textContent}`
      );
    });
  }
})();
