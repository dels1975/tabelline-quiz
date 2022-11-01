("use strict");

const elResponse = document.querySelectorAll(".response");
const risultatoEsatto = document.getElementById("risultato");
const contaRispostaEsatta = document.getElementById("contaRispostaEsatta");

/* function risposta() {
  for (let i = 0; i < elResponse.length; i++) {
    elResponse[i].addEventListener("click", function () {
      alert("ok");
    });
  }
}

 risposta(); */

// IIFE - Immediately Invoked Function Expression
// equivalente alla porzione di codice appena sopra; equivale a dichiarare una funzione ed invocarla

(() => {
  numberGenerator();

  // for (const k in elResponse) {
  //   elResponse[k].setAttribute("style", "display:inline");
  // }

  for (let i = 0; i < elResponse.length; i++) {
    elResponse[i].addEventListener("click", function (e) {
      let value = i + 1;
      // elResponse[i].innerText == risultatoEsatto.value
      //   ? alert(`Hai selezionato la risposta corretta`)
      //   : alert(`Hai selezionato la risposta sbagliata`);

      // elResponse[i].innerText == risultatoEsatto.value
      //   ? (risposta1.value = parseInt(contaRispostaEsatta.value) + 1) // + (contaRispostaEsatta.value += 1)
      //   : (risposta1.value = 0);

      if (parseInt(conteggio.value) < 10) {
        conteggio.value = parseInt(conteggio.value) + 1;
      } else {
        conteggio.value = 1;
        contaRispostaEsatta.value = 0;
      }

      if (elResponse[i].innerText == risultatoEsatto.value) {
        contaRispostaEsatta.value = parseInt(contaRispostaEsatta.value) + 1;
      }
      // numberGenerator();
      // for (const key in elResponse) {
      //   elResponse[i].setAttribute("style", "display:none");
      // }
      if (e) {
        // evento generato -> alert("hai cliccato una risposta");
        const operatorOne = (document.getElementById("m1").innerText = "");
        const operatorTwo = (document.getElementById("m2").innerText = "");
        const operatorX = (document.getElementById("mX").innerText = "");
        const operatorEgual = (document.getElementById("=").innerText = "");
        // elResponse[i].setAttribute is not a function
        for (const i in elResponse) {
          elResponse[i].setAttribute("style", "visibility:hidden");

          // Riattiva il pulsante "Genera"
          const bottone = document.getElementById("go");
          bottone.removeAttribute("disabled", "");
        }
      }
    });
  }
})();
