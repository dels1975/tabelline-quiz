("use strict");

const el2 = document.querySelectorAll(".response");
const risultatoEsatto = document.getElementById("risultato");

const risposta1 = document.getElementById("response1");
const risposta2 = document.getElementById("response2");
const risposta3 = document.getElementById("response3");
const risposta4 = document.getElementById("response4");
const risposta5 = document.getElementById("response5");
const risposta6 = document.getElementById("response6");
const risposta7 = document.getElementById("response7");
const risposta8 = document.getElementById("response8");
const risposta9 = document.getElementById("response9");
const risposta10 = document.getElementById("response10");

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
      // el2[i].innerText == risultatoEsatto.value
      //   ? alert(`Hai selezionato la risposta corretta`)
      //   : alert(`Hai selezionato la risposta sbagliata`);

      el2[i].innerText == risultatoEsatto.value
        ? (risposta1.value = 1)
        : (risposta1.value = 0);
      console.log(risposta1.value);
      conteggio.value < 1
        ? (conteggio.value = 1)
        : (conteggio.value = conteggio.value + 1);
      // console.log(typeof conteggio.value);  è una stringa
    });
  }
})();
