"use strict";

// 1. selecting all DOM elements

const billAmount = document.querySelector(`.calc__bill-input`);
const numberOfPeople = document.querySelector(`.calc-number-people`);
const calcTips = document.querySelectorAll(`.tipAmount`);
const custom = document.querySelector(`.custom`);
const warn = document.querySelector(`.warn`);
const tipPerPerson = document.querySelector(`.tip-per-person`);
const totalPerPerson = document.querySelector(`.total-per-person`);
const btnReset = document.querySelector(`.btn-reset`);
const btnCalc = document.querySelector(`.btn-calc`);

// Initial global variables
let tipValue, bill, people;

// Init function for the sake of refactoring
const init = function () {
  tipValue = 0;
  bill = 0;
  people = 0;

  tipPerPerson.textContent = 0;
  totalPerPerson.textContent = 0;
  billAmount.value = ``;
  numberOfPeople.value = ``;
  custom.value = ``;

  warn.classList.add(`hidden`);
  btnReset.classList.add(`hidden`);
  btnCalc.classList.remove(`hidden`);
};
init();

// Taking values of bill and number of people
billAmount.addEventListener(`change`, (e) => (bill = Number(e.target.value)));
numberOfPeople.addEventListener(
  `change`,
  (e) => (people = Number(e.target.value))
);
custom.addEventListener(`change`, function(e){tipValue = Number(e.target.value)})
// Taking tip amount values
const tipAmounts = [...calcTips];

tipAmounts.forEach((tip) => {
  tip.onclick = () => {
    tipValue = tip.textContent.replace(`%`, ``);
  };
});

// Implementing calc Functionality
btnCalc.addEventListener(`click`, function () {
  if (bill > 0 && people > 0) {

    tipPerPerson.textContent = (((tipValue / 100) * bill) / people).toFixed(1);
    totalPerPerson.textContent = ((bill + tipValue) / people).toFixed(1);

    btnCalc.classList.add(`hidden`);
    btnReset.classList.remove(`hidden`);

    if (!warn.classList.contains(`hidden`)) warn.classList.add(`hidden`);
  } else {
    warn.classList.remove(`hidden`);
  }
  // console.log(tipValue);
});

// Implementing reset btn
btnReset.addEventListener(`click`, () => {
  init();
});
