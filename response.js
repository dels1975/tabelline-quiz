("use strict");

const el2 = document.querySelectorAll(".response");
const risultatoEsatto = document.getElementById("r4");

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
      el2[i].innerText == risultatoEsatto.innerText
        ? alert(`Hai selezionato la risposta corretta`)
        : alert(`Hai selezionato la risposta sbagliata`);
    });
  }
})();
