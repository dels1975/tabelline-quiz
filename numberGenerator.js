"use strict";

const conteggio = document.getElementById("conteggio");

/*
// Costruttore di oggetto
function Multiplication(multiplying, multiplier, result1, result2, result3) {
  this.multiplying = multiplying; // moltiplicando: restituisce un mumero da 0 a 8 compresi
  this.multiplier = multiplier; // moltiplicatore: restituisce un mumero da 0 a 10 compresi

  this.result1 = result1; // risultato 1
  this.result2 = result2; // risultato 2
  this.result3 = result3; // risultato 3

  /*
        this.resultTrue = function () {
          let result = this.multiplying * this.multiplier;
          return result;
        };
        */
// la sintassi di creazione metodo con una arrow function è alternativa alla sintassi commentata sopra
/*
  this.resultTrue = () => this.multiplying * this.multiplier;
}
*/

// Costruttore di oggetto
class Multiplication {
  constructor(multiplying, multiplier, result1, result2, result3) {
    this.multiplying = multiplying; // moltiplicando: restituisce un mumero da 0 a 8 compresi
    this.multiplier = multiplier; // moltiplicatore: restituisce un mumero da 0 a 10 compresi

    this.result1 = result1; // risultato 1
    this.result2 = result2; // risultato 2
    this.result3 = result3; // risultato 3

    // this.resultTrue = function () {
    //   let result = this.multiplying * this.multiplier;
    //   return result;
    // };

    // la sintassi di creazione metodo con una arrow function è alternativa alla sintassi commentata sopra
    this.resultTrue = () => this.multiplying * this.multiplier;
  }
}

function numberGenerator() {
  // genera i numeri casuali fino a quando il prodotto di a*b è diverso sia da c che da d
  let multiplying = Math.floor(Math.random() * 9);
  let multiplier = Math.floor(Math.random() * 11);
  let risultatoVero = multiplying * multiplier;
  const listValue = [];

  function generaFalso() {
    let candidatoFalso = Math.floor(Math.random() * 81);
    // console.log(risultatoVero);
    if (candidatoFalso != risultatoVero && candidatoFalso != listValue[0]) {
      console.log(
        `${candidatoFalso} != da ${risultatoVero}, ${candidatoFalso} != da ${listValue[0]}`
      );
      listValue.push(candidatoFalso);
      console.log(listValue[0]);
    }
  }

  do {
    // console.log(listValue.length);
    generaFalso();
    // console.log(listValue.length);
    console.log(listValue);
  } while (listValue.length < 2);

  listValue.push(risultatoVero);
  listValue.sort();

  // console.log(listValue);

  console.log(multiplying + " x " + multiplier + " = " + risultatoVero);

  // istanza dell'oggetto Product
  let operazione = new Multiplication(
    multiplying, // moltiplicando: restituisce un mumero da 0 a 8 compresi
    multiplier, // moltiplicatore: restituisce un mumero da 0 a 80 compresi
    listValue[0],
    listValue[1],
    listValue[2]
  );

  const operatorOne = document.getElementById("m1"); // moltiplicando
  const operatorTwo = document.getElementById("m2"); // moltiplicatore

  const risultatoUno = document.getElementById("r1");
  const risultatoDue = document.getElementById("r2");
  const risultatoTre = document.getElementById("r3");
  const risultatoCalcolo = document.getElementById("risultato");

  operatorOne.innerHTML = operazione.multiplying;
  operatorTwo.innerHTML = operazione.multiplier;

  risultatoUno.innerHTML = operazione.result1;
  risultatoDue.innerHTML = operazione.result2;
  risultatoTre.innerHTML = operazione.result3;
  risultatoCalcolo.value = operazione.resultTrue();
}

const el = document.querySelector("#go");
el.addEventListener("click", numberGenerator);
